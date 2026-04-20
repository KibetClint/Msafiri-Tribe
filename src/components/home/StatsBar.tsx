const stats = [
  { value: "500+", label: "Happy Travellers" },
  { value: "30+",  label: "Destinations" },
  { value: "8+",   label: "Years Experience" },
  { value: "24/7", label: "Guest Support" },
];

const StatsBar = () => (
  <div className="bg-safari-dark text-primary-foreground py-6">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {stats.map((s) => (
          <div key={s.label} className="text-center px-6 py-2">
            <div className="font-display text-2xl md:text-3xl font-black text-safari-green-light">
              {s.value}
            </div>
            <div className="text-white/45 text-xs mt-1 tracking-widest uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default StatsBar;
