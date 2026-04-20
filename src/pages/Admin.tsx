import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { LucideIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  CalendarDays,
  Mail,
  MessageSquare,
  Users,
  Trash2,
  Pencil,
  Eye,
  MapPin,
  Plus,
  Globe,
  ListFilter,
  PenLine,
} from "lucide-react";
import { toast } from "sonner";
import {
  useUpcomingDestinations,
  UpcomingDestination,
} from "@/context/UpcomingDestinationsContext";
import { destinations } from "@/lib/data";

// ── Dummy data ────────────────────────────────────────────────────────────────

const initialBookings = [
  {
    id: 1,
    name: "John Smith",
    email: "john@email.com",
    destination: "Masai Mara",
    date: "2026-05-15",
    guests: 4,
    status: "confirmed",
  },
  {
    id: 2,
    name: "Sarah Lee",
    email: "sarah@email.com",
    destination: "Zanzibar",
    date: "2026-06-01",
    guests: 2,
    status: "pending",
  },
  {
    id: 3,
    name: "Mike Osei",
    email: "mike@email.com",
    destination: "Serengeti",
    date: "2026-05-20",
    guests: 6,
    status: "confirmed",
  },
  {
    id: 4,
    name: "Amina Hassan",
    email: "amina@email.com",
    destination: "Diani Beach",
    date: "2026-07-10",
    guests: 3,
    status: "pending",
  },
  {
    id: 5,
    name: "David Kamau",
    email: "david@email.com",
    destination: "Amboseli",
    date: "2026-06-18",
    guests: 2,
    status: "cancelled",
  },
];

const dummyEnquiries = [
  {
    id: 1,
    name: "Grace Wanjiku",
    email: "grace@email.com",
    subject: "Honeymoon Package",
    message: "Looking for a 7-day honeymoon package to Zanzibar...",
    date: "2026-04-02",
    status: "new",
  },
  {
    id: 2,
    name: "Peter Njoroge",
    email: "peter@email.com",
    subject: "Group Safari",
    message: "We're a group of 12 looking for a safari in August...",
    date: "2026-04-01",
    status: "replied",
  },
  {
    id: 3,
    name: "Lisa Brown",
    email: "lisa@email.com",
    subject: "Custom Itinerary",
    message: "Can you create a custom 10-day Kenya & Tanzania tour...",
    date: "2026-03-30",
    status: "new",
  },
];

const dummyMessages = [
  {
    id: 1,
    name: "Tom Okello",
    phone: "+254712345678",
    message: "Is the Masai Mara trip available in December?",
    date: "2026-04-05",
    source: "WhatsApp",
  },
  {
    id: 2,
    name: "Jane Muthoni",
    phone: "+254723456789",
    message: "What's included in the membership?",
    date: "2026-04-04",
    source: "WhatsApp",
  },
  {
    id: 3,
    name: "Alex Kiprop",
    phone: "+254734567890",
    message: "Do you offer student discounts?",
    date: "2026-04-03",
    source: "Website",
  },
];

const dummyContacts = [
  {
    id: 1,
    name: "Emily Achieng",
    email: "emily@email.com",
    phone: "+254745678901",
    subject: "Partnership Inquiry",
    message: "We're a hotel in Mombasa and would like to partner...",
    date: "2026-04-05",
  },
  {
    id: 2,
    name: "Hassan Ali",
    email: "hassan@email.com",
    phone: "+254756789012",
    subject: "Feedback",
    message: "Had an amazing experience with your Serengeti tour...",
    date: "2026-04-03",
  },
  {
    id: 3,
    name: "Rebecca Mwende",
    email: "rebecca@email.com",
    phone: "+254767890123",
    subject: "Complaint",
    message: "The transfer from the airport was delayed by 2 hours...",
    date: "2026-04-01",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

const statusColor = (status: string) => {
  switch (status) {
    case "confirmed":
    case "replied":
      return "bg-primary/10 text-primary border-primary/20";
    case "pending":
    case "new":
      return "bg-secondary/10 text-secondary border-secondary/20";
    case "cancelled":
      return "bg-destructive/10 text-destructive border-destructive/20";
    default:
      return "";
  }
};

/** Format ISO date ("2026-09-15") → "15 Sep 2026" for display in the card */
const formatDateLabel = (dateStr: string) => {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr; // fallback to raw string
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const StatCard = ({
  title,
  value,
  icon: Icon,
  description,
}: {
  title: string;
  value: number;
  icon: LucideIcon;
  description: string;
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

// ── Blank form ────────────────────────────────────────────────────────────────

const blankForm = (): Omit<UpcomingDestination, "id"> => ({
  name: "",
  country: "",
  description: "",
  launchDate: "",
  tag: "Safari",
  imageUrl: "",
  slug: "",
  localPrice: undefined,
  foreignerPrice: undefined,
  discountPercent: undefined,
  offerLabel: "",
  offerExpiry: "",
});

// ── Category → tag mapping ────────────────────────────────────────────────────

const categoryToTag = (category: string): string => {
  const map: Record<string, string> = {
    local: "Safari",
    beach: "Beach",
    international: "Adventure",
    adventure: "Adventure",
    luxury: "Luxury",
    budget: "Budget",
    cultural: "Cultural",
  };
  return map[category?.toLowerCase()] ?? "Safari";
};

// ── Admin Page ────────────────────────────────────────────────────────────────

const Admin = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState(initialBookings);
  const { upcoming, addUpcoming, updateUpcoming, deleteUpcoming } =
    useUpcomingDestinations();

  useEffect(() => {
    const isAuth = sessionStorage.getItem("admin_authenticated");
    if (!isAuth) navigate("/admin/login", { replace: true });
  }, [navigate]);

  // Booking dialogs
  const [editBooking, setEditBooking] = useState<
    (typeof initialBookings)[0] | null
  >(null);
  const [deleteBooking, setDeleteBooking] = useState<
    (typeof initialBookings)[0] | null
  >(null);
  const [editStatus, setEditStatus] = useState("");

  const handleDelete = () => {
    if (!deleteBooking) return;
    setBookings((prev) => prev.filter((b) => b.id !== deleteBooking.id));
    toast.success(`Booking for ${deleteBooking.name} deleted`);
    setDeleteBooking(null);
  };

  const handleUpdateStatus = () => {
    if (!editBooking) return;
    setBookings((prev) =>
      prev.map((b) =>
        b.id === editBooking.id ? { ...b, status: editStatus } : b,
      ),
    );
    toast.success(`Status updated to "${editStatus}"`);
    setEditBooking(null);
  };

  // ── Upcoming destination state ────────────────────────────────────────────

  const [upcomingForm, setUpcomingForm] =
    useState<Omit<UpcomingDestination, "id">>(blankForm());
  const [editingUpcoming, setEditingUpcoming] =
    useState<UpcomingDestination | null>(null);
  const [showUpcomingForm, setShowUpcomingForm] = useState(false);
  const [deleteUpcomingTarget, setDeleteUpcomingTarget] =
    useState<UpcomingDestination | null>(null);

  /**
   * "custom"  — admin fills in all fields manually
   * "existing" — admin picks from the destinations already in @/lib/data
   */
  const [addMode, setAddMode] = useState<"custom" | "existing">("custom");
  const [selectedDestId, setSelectedDestId] = useState<string>("");

  const openAddUpcoming = () => {
    setEditingUpcoming(null);
    setUpcomingForm(blankForm());
    setAddMode("custom");
    setSelectedDestId("");
    setShowUpcomingForm(true);
  };

  const openEditUpcoming = (d: UpcomingDestination) => {
    setEditingUpcoming(d);
    setUpcomingForm({
      name: d.name,
      country: d.country,
      description: d.description,
      launchDate: d.launchDate,
      tag: d.tag,
      imageUrl: d.imageUrl,
      slug: d.slug ?? "",
      localPrice: d.localPrice,
      foreignerPrice: d.foreignerPrice,
      discountPercent: d.discountPercent,
      offerLabel: d.offerLabel ?? "",
      offerExpiry: d.offerExpiry ?? "",
    });
    setAddMode("custom");
    setSelectedDestId("");
    setShowUpcomingForm(true);
  };

  /** When the admin picks an existing destination, pre-fill the form */
  const handlePickExisting = (id: string) => {
    setSelectedDestId(id);
    const dest = destinations.find((d) => String(d.id) === id);
    if (!dest) return;
    setUpcomingForm((f) => ({
      ...f,
      name: dest.name,
      country: (dest as any).country ?? dest.category ?? "",
      description: dest.description ?? "",
      tag: categoryToTag(dest.category),
      imageUrl: dest.image ?? "",
      // slug enables the card on the home page to link to the full detail page
      slug: dest.slug ?? "",
    }));
  };

  const handleSaveUpcoming = () => {
    if (!upcomingForm.name.trim() || !upcomingForm.country.trim()) {
      toast.error("Name and country are required.");
      return;
    }
    if (editingUpcoming) {
      updateUpcoming({ ...upcomingForm, id: editingUpcoming.id });
      toast.success(`"${upcomingForm.name}" updated`);
    } else {
      addUpcoming(upcomingForm);
      toast.success(`"${upcomingForm.name}" added to upcoming destinations`);
    }
    setShowUpcomingForm(false);
  };

  const handleDeleteUpcoming = () => {
    if (!deleteUpcomingTarget) return;
    deleteUpcoming(deleteUpcomingTarget.id);
    toast.success(`"${deleteUpcomingTarget.name}" removed`);
    setDeleteUpcomingTarget(null);
  };

  return (
    <Layout>
      <div className="container py-8">
        <AnimatedSection>
          <h1 className="text-3xl font-display font-bold mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mb-8">
            Manage bookings, enquiries, messages, contacts and upcoming
            destinations
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <StatCard
              title="Total Bookings"
              value={bookings.length}
              icon={CalendarDays}
              description={`${bookings.filter((b) => b.status === "pending").length} pending`}
            />
            <StatCard
              title="Enquiries"
              value={dummyEnquiries.length}
              icon={Mail}
              description="2 new enquiries"
            />
            <StatCard
              title="Messages"
              value={dummyMessages.length}
              icon={MessageSquare}
              description="From WhatsApp & website"
            />
            <StatCard
              title="Contacts"
              value={dummyContacts.length}
              icon={Users}
              description="3 this week"
            />
            <StatCard
              title="Upcoming"
              value={upcoming.length}
              icon={Globe}
              description="Shown on home page"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <Tabs defaultValue="bookings" className="space-y-4">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="enquiries">Enquiries</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            </TabsList>

            {/* ── Bookings ── */}
            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle>All Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Destination</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Guests</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bookings.map((b) => (
                        <TableRow key={b.id}>
                          <TableCell className="font-medium">
                            {b.name}
                          </TableCell>
                          <TableCell>{b.email}</TableCell>
                          <TableCell>{b.destination}</TableCell>
                          <TableCell>{b.date}</TableCell>
                          <TableCell>{b.guests}</TableCell>
                          <TableCell>
                            <Badge
                              className={statusColor(b.status)}
                              variant="outline">
                              {b.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                title="Update status"
                                onClick={() => {
                                  setEditBooking(b);
                                  setEditStatus(b.status);
                                }}>
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                title="Delete"
                                className="text-destructive hover:text-destructive"
                                onClick={() => setDeleteBooking(b)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                      {bookings.length === 0 && (
                        <TableRow>
                          <TableCell
                            colSpan={7}
                            className="text-center text-muted-foreground py-8">
                            No bookings found
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── Enquiries ── */}
            <TabsContent value="enquiries">
              <Card>
                <CardHeader>
                  <CardTitle>All Enquiries</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {dummyEnquiries.map((e) => (
                        <TableRow key={e.id}>
                          <TableCell className="font-medium">
                            {e.name}
                          </TableCell>
                          <TableCell>{e.email}</TableCell>
                          <TableCell>{e.subject}</TableCell>
                          <TableCell>{e.date}</TableCell>
                          <TableCell>
                            <Badge
                              className={statusColor(e.status)}
                              variant="outline">
                              {e.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── Messages ── */}
            <TabsContent value="messages">
              <Card>
                <CardHeader>
                  <CardTitle>All Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Source</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {dummyMessages.map((m) => (
                        <TableRow key={m.id}>
                          <TableCell className="font-medium">
                            {m.name}
                          </TableCell>
                          <TableCell>{m.phone}</TableCell>
                          <TableCell className="max-w-[200px] truncate">
                            {m.message}
                          </TableCell>
                          <TableCell>{m.date}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{m.source}</Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── Contacts ── */}
            <TabsContent value="contacts">
              <Card>
                <CardHeader>
                  <CardTitle>All Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {dummyContacts.map((c) => (
                        <TableRow key={c.id}>
                          <TableCell className="font-medium">
                            {c.name}
                          </TableCell>
                          <TableCell>{c.email}</TableCell>
                          <TableCell>{c.phone}</TableCell>
                          <TableCell>{c.subject}</TableCell>
                          <TableCell>{c.date}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── Upcoming Destinations ── */}
            <TabsContent value="upcoming">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Upcoming Destinations</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      These appear in the "Coming Soon" section on the home
                      page.
                    </p>
                  </div>
                  <Button onClick={openAddUpcoming} className="gap-2">
                    <Plus className="h-4 w-4" /> Add Destination
                  </Button>
                </CardHeader>
                <CardContent>
                  {upcoming.length === 0 ? (
                    <div className="text-center py-16 text-muted-foreground">
                      <MapPin className="h-10 w-10 mx-auto mb-3 opacity-30" />
                      <p className="font-medium">
                        No upcoming destinations yet
                      </p>
                      <p className="text-sm mt-1">
                        Add one to have it appear on the home page.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      {upcoming.map((d) => (
                        <div
                          key={d.id}
                          className="group relative rounded-xl border border-border bg-safari-cream overflow-hidden hover:shadow-md transition-shadow">
                          <div className="h-36 bg-safari-green/10 flex items-center justify-center overflow-hidden relative">
                            {d.imageUrl ? (
                              <img
                                src={d.imageUrl}
                                alt={d.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display =
                                    "none";
                                }}
                              />
                            ) : (
                              <MapPin className="h-10 w-10 text-safari-green/30" />
                            )}
                            <span className="absolute top-3 left-3 text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full bg-safari-green text-white">
                              {d.tag}
                            </span>
                          </div>

                          <div className="p-4">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h3 className="font-display font-bold text-sm leading-tight">
                                {d.name}
                              </h3>
                              <span className="text-[10px] text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">
                                {formatDateLabel(d.launchDate)}
                              </span>
                            </div>
                            <p className="text-xs text-safari-warm font-semibold mb-2">
                              {d.country}
                            </p>
                            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                              {d.description}
                            </p>
                          </div>

                          <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => openEditUpcoming(d)}
                              className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors">
                              <Pencil className="h-3.5 w-3.5 text-foreground" />
                            </button>
                            <button
                              onClick={() => setDeleteUpcomingTarget(d)}
                              className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow hover:bg-destructive hover:text-white transition-colors">
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>

      {/* ── Booking: Update Status Dialog ── */}
      <Dialog
        open={!!editBooking}
        onOpenChange={(open) => !open && setEditBooking(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Booking Status</DialogTitle>
            <DialogDescription>
              Change the status for {editBooking?.name}'s booking to{" "}
              {editBooking?.destination}.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <label className="text-sm font-medium mb-2 block">Status</label>
            <Select value={editStatus} onValueChange={setEditStatus}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditBooking(null)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateStatus}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Booking: Delete Confirmation ── */}
      <Dialog
        open={!!deleteBooking}
        onOpenChange={(open) => !open && setDeleteBooking(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Booking</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the booking for{" "}
              <span className="font-semibold">{deleteBooking?.name}</span> to{" "}
              {deleteBooking?.destination}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteBooking(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Upcoming: Add / Edit Dialog ── */}
      <Dialog
        open={showUpcomingForm}
        onOpenChange={(open) => !open && setShowUpcomingForm(false)}>
        <DialogContent className="max-w-lg max-h-[90vh] flex flex-col">
          <DialogHeader className="shrink-0">
            <DialogTitle>
              {editingUpcoming
                ? "Edit Upcoming Destination"
                : "Add Upcoming Destination"}
            </DialogTitle>
            <DialogDescription>
              This will appear in the "Coming Soon" section on the home page.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-2 overflow-y-auto pr-1">
            {/* ── Source toggle (only shown when adding, not editing) ── */}
            {!editingUpcoming && (
              <div className="flex rounded-lg border border-border overflow-hidden text-sm font-medium">
                <button
                  type="button"
                  onClick={() => {
                    setAddMode("custom");
                    setSelectedDestId("");
                    setUpcomingForm(blankForm());
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 transition-colors ${
                    addMode === "custom"
                      ? "bg-safari-green text-white"
                      : "bg-background text-muted-foreground hover:text-foreground"
                  }`}>
                  <PenLine className="h-3.5 w-3.5" />
                  Custom
                </button>
                <button
                  type="button"
                  onClick={() => setAddMode("existing")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 transition-colors ${
                    addMode === "existing"
                      ? "bg-safari-green text-white"
                      : "bg-background text-muted-foreground hover:text-foreground"
                  }`}>
                  <ListFilter className="h-3.5 w-3.5" />
                  From Existing
                </button>
              </div>
            )}

            {/* ── "From Existing" destination picker ── */}
            {addMode === "existing" && !editingUpcoming && (
              <div className="space-y-1.5">
                <Label>Pick a destination</Label>
                <Select
                  value={selectedDestId}
                  onValueChange={handlePickExisting}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a destination…" />
                  </SelectTrigger>
                  <SelectContent className="max-h-56">
                    {destinations.map((dest) => (
                      <SelectItem key={dest.id} value={String(dest.id)}>
                        {dest.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedDestId && (
                  <p className="text-xs text-muted-foreground">
                    Fields pre-filled from the destination. You can still edit
                    them below.
                  </p>
                )}
              </div>
            )}

            {/* ── Name & Country ── */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="up-name">
                  Destination Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="up-name"
                  placeholder="e.g. Gorilla Trekking"
                  value={upcomingForm.name}
                  onChange={(e) =>
                    setUpcomingForm((f) => ({ ...f, name: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="up-country">
                  Country <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="up-country"
                  placeholder="e.g. Uganda"
                  value={upcomingForm.country}
                  onChange={(e) =>
                    setUpcomingForm((f) => ({ ...f, country: e.target.value }))
                  }
                />
              </div>
            </div>

            {/* ── Category & Launch Date ── */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="up-tag">Category</Label>
                <Select
                  value={upcomingForm.tag}
                  onValueChange={(v) =>
                    setUpcomingForm((f) => ({ ...f, tag: v }))
                  }>
                  <SelectTrigger id="up-tag">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "Safari",
                      "Beach",
                      "Adventure",
                      "Cultural",
                      "Luxury",
                      "Budget",
                    ].map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="up-launch">
                  Launch Date
                  <span className="ml-1 text-[10px] text-muted-foreground font-normal">
                    (enables live countdown)
                  </span>
                </Label>
                {/* Use date picker for exact date; falls back gracefully if left empty */}
                <Input
                  id="up-launch"
                  type="date"
                  value={
                    // only show as date input value when it looks like ISO
                    /^\d{4}-\d{2}-\d{2}$/.test(upcomingForm.launchDate)
                      ? upcomingForm.launchDate
                      : ""
                  }
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) =>
                    setUpcomingForm((f) => ({
                      ...f,
                      launchDate: e.target.value, // stores as "YYYY-MM-DD"
                    }))
                  }
                />
              </div>
            </div>

            {/* ── Description ── */}
            <div className="space-y-1.5">
              <Label htmlFor="up-desc">Description</Label>
              <Textarea
                id="up-desc"
                placeholder="A short teaser for travellers..."
                rows={3}
                value={upcomingForm.description}
                onChange={(e) =>
                  setUpcomingForm((f) => ({
                    ...f,
                    description: e.target.value,
                  }))
                }
              />
            </div>

            {/* ── Pricing ── */}
            <div className="rounded-lg border border-border p-4 space-y-4 bg-muted/30">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Pricing
                </p>
                <span className="text-[10px] text-muted-foreground">
                  Residents always pay less than international visitors
                </span>
              </div>

              {/* Local & Foreigner prices */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="up-local-price">
                    Resident Price <span className="text-destructive">*</span>{" "}
                    <span className="text-muted-foreground font-normal text-xs">
                      (KES)
                    </span>
                  </Label>
                  <Input
                    id="up-local-price"
                    type="number"
                    min={0}
                    placeholder="e.g. 45,000"
                    value={upcomingForm.localPrice ?? ""}
                    onChange={(e) =>
                      setUpcomingForm((f) => ({
                        ...f,
                        localPrice: e.target.value
                          ? Number(e.target.value)
                          : undefined,
                      }))
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="up-foreign-price">
                    International Price{" "}
                    <span className="text-destructive">*</span>{" "}
                    <span className="text-muted-foreground font-normal text-xs">
                      (USD)
                    </span>
                  </Label>
                  <Input
                    id="up-foreign-price"
                    type="number"
                    min={0}
                    placeholder="e.g. 350"
                    value={upcomingForm.foreignerPrice ?? ""}
                    onChange={(e) =>
                      setUpcomingForm((f) => ({
                        ...f,
                        foreignerPrice: e.target.value
                          ? Number(e.target.value)
                          : undefined,
                      }))
                    }
                  />
                </div>
              </div>

              {/* Discount & Offer */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="up-discount">
                    Discount{" "}
                    <span className="text-muted-foreground font-normal text-xs">
                      (%)
                    </span>
                  </Label>
                  <Input
                    id="up-discount"
                    type="number"
                    min={0}
                    max={100}
                    placeholder="e.g. 15"
                    value={upcomingForm.discountPercent ?? ""}
                    onChange={(e) =>
                      setUpcomingForm((f) => ({
                        ...f,
                        discountPercent: e.target.value
                          ? Math.min(100, Number(e.target.value))
                          : undefined,
                      }))
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="up-offer-label">Offer Label</Label>
                  <Input
                    id="up-offer-label"
                    placeholder="e.g. Early Bird"
                    value={upcomingForm.offerLabel ?? ""}
                    onChange={(e) =>
                      setUpcomingForm((f) => ({
                        ...f,
                        offerLabel: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              {/* Offer expiry */}
              {(upcomingForm.discountPercent || upcomingForm.offerLabel) && (
                <div className="space-y-1.5">
                  <Label htmlFor="up-offer-expiry">
                    Offer Expires{" "}
                    <span className="text-muted-foreground font-normal text-xs">
                      (optional)
                    </span>
                  </Label>
                  <Input
                    id="up-offer-expiry"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={upcomingForm.offerExpiry ?? ""}
                    onChange={(e) =>
                      setUpcomingForm((f) => ({
                        ...f,
                        offerExpiry: e.target.value,
                      }))
                    }
                  />
                </div>
              )}
            </div>

            {/* ── Image URL ── */}
            <div className="space-y-1.5">
              <Label htmlFor="up-image">
                Image URL{" "}
                <span className="text-muted-foreground text-xs">
                  (optional)
                </span>
              </Label>
              <Input
                id="up-image"
                placeholder="https://..."
                value={upcomingForm.imageUrl}
                onChange={(e) =>
                  setUpcomingForm((f) => ({ ...f, imageUrl: e.target.value }))
                }
              />
              {upcomingForm.imageUrl && (
                <div className="h-24 rounded-lg overflow-hidden border border-border mt-2">
                  <img
                    src={upcomingForm.imageUrl}
                    alt="preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          <DialogFooter className="shrink-0 pt-2 border-t border-border">
            <Button
              variant="outline"
              onClick={() => setShowUpcomingForm(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveUpcoming}>
              {editingUpcoming ? "Save Changes" : "Add Destination"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Upcoming: Delete Confirmation ── */}
      <Dialog
        open={!!deleteUpcomingTarget}
        onOpenChange={(open) => !open && setDeleteUpcomingTarget(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove Upcoming Destination</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove{" "}
              <span className="font-semibold">
                {deleteUpcomingTarget?.name}
              </span>{" "}
              from the home page? This cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteUpcomingTarget(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteUpcoming}>
              Remove
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Admin;
