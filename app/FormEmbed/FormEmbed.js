import { useEffect } from "react";

function FormEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/250487876455068";
    script.type = "text/javascript";
    script.async = true;
    document.getElementById("jotform-container")?.appendChild(script);
  }, []);

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Your idea could be the next big thing!
        </h2>
        <div id="jotform-container" className="flex justify-center"></div>
      </div>
    </section>
  );
}

export default FormEmbed;
