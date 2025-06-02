export default function Testimonials() {
  const testimonials = [
    {
      name: 'Jane Doe',
      position: 'CTO, FutureTech Inc.',
      message: 'Henry is a phenomenal engineer. His futuristic design thinking and execution are second to none.',
      avatar: 'https://i.pravatar.cc/100?img=3',
    },
    {
      name: 'John Smith',
      position: 'CEO, InnovateX',
      message: 'A visionary developer. The results were sleek, modern, and exceeded all expectations.',
      avatar: 'https://i.pravatar.cc/100?img=4',
    },
    {
      name: 'Linda Kim',
      position: 'Project Manager, NovaSolutions',
      message: 'Professional, detail-oriented, and incredibly skilled. Our team loved working with Henry.',
      avatar: 'https://i.pravatar.cc/100?img=5',
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-primary">
          💬 Testimonials
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4 space-x-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-accent"
                />
                <div>
                  <h4 className="font-semibold text-primary">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.position}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">"{t.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
