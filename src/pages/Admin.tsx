import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";
import { toast } from "sonner";

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

const Admin = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState(initialBookings);

  useEffect(() => {
    const isAuth = sessionStorage.getItem("admin_authenticated");
    if (!isAuth) {
      navigate("/admin/login", { replace: true });
    }
  }, [navigate]);
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

  return (
    <Layout>
      <div className="container py-8">
        <AnimatedSection>
          <h1 className="text-3xl font-display font-bold mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mb-8">
            Manage bookings, enquiries, messages and contacts
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <Tabs defaultValue="bookings" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="enquiries">Enquiries</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
            </TabsList>

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
          </Tabs>
        </AnimatedSection>
      </div>

      {/* Update Status Dialog */}
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

      {/* Delete Confirmation Dialog */}
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
    </Layout>
  );
};

export default Admin;
