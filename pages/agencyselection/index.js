import { ManagedAgencySelection } from '~/sections/AgencySelection';

const agencyProps = {
  title: "Managed agency selection",
  description: "Stengthen your onboarding process",
  video: { src: 'video/sample.mp4', width: 300, height: 527 },
  cardsToDisplay: 3,
  cards: [
    {
      bgcolor: "#F9F9F9",
      size: "50%",
      title: "Brief",
      icon: { src: "/img/icon1.png" },
      content: "Complete <b>brief writing or simple guidance</b> on what to include, we've got you covered."
    },
    {
      bgcolor: "#F4F4F4",
      size: "53%",
      title: "Brief",
      icon: { src: "/img/icon1.png" },
      content: "Complete <b>brief writing or simple guidance</b> on what to include, we've got you covered."
    },
    {
      bgcolor: "#F1F1F1",
      size: "56%",
      title: "Brief",
      icon: { src: "/img/icon1.png" },
      content: "Complete <b>brief writing or simple guidance</b> on what to include, we've got you covered."
    }
  ]
}
export default function AgencySelection() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <ManagedAgencySelection {...agencyProps} />
      </div>
    </>
  );
}