"use client";

function Info({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
        {label}
      </p>
      <p className="mt-1 break-words font-medium text-gray-800">
        {value || "-"}
      </p>
    </div>
  );
}

export default function VisitorInfoPanel({ session }) {
  if (!session) {
    return (
      <aside className="hidden w-[330px] border-l border-gray-200 bg-white p-5 xl:block">
        <p className="text-sm text-gray-500">Select a chat to view details.</p>
      </aside>
    );
  }

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

  const message = encodeURIComponent(`
Nova Website Live Agent Request

Name: ${session.visitorName || "-"}
Contact: ${session.visitorContact || "-"}
Business: ${session.visitorBusiness || "-"}
Service: ${session.selectedService || "-"}
Location: ${session.visitorLocation || "-"}
Requirement: ${session.visitorRequirement || "-"}
Page: ${session.pageUrl || "-"}
`);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <aside className="hidden w-[300px] border-l border-gray-200 bg-white p-5 xl:block">
      <h2 className="text-lg font-bold text-gray-950">Visitor Details</h2>

      <div className="mt-5 space-y-4 rounded-2xl bg-gray-50 p-4 text-sm">
        <Info label="Name" value={session.visitorName || "Website Visitor"} />
        <Info label="Phone / Email" value={session.visitorContact} />
        <Info label="Business" value={session.visitorBusiness} />
        <Info label="Service" value={session.selectedService} />
        <Info label="Location" value={session.visitorLocation} />
        <Info label="Requirement" value={session.visitorRequirement} />
        <Info label="Status" value={session.status} />
        <Info label="Assigned Agent" value={session.assignedAgentName} />
        <Info label="Page URL" value={session.pageUrl} />
        <Info label="Visitor ID" value={session.visitorId} />
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex h-11 items-center justify-center rounded-xl bg-green-600 text-sm font-semibold text-white transition hover:bg-green-700"
      >
        Send Details to WhatsApp
      </a>
    </aside>
  );
}