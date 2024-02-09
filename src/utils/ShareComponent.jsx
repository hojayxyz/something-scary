import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LineIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  WhatsappIcon,
  XIcon,
  FacebookMessengerShareButton,
} from "react-share";

function ShareComponent({ title, shareUrl, size }) {
  return (
    <div className="flex flex-wrap space-x-3 space-y-3 m-3">
      <TwitterShareButton url={shareUrl} title={title}>
        <XIcon size={size} round />
      </TwitterShareButton>
      <TelegramShareButton url={shareUrl} title={title}>
        <TelegramIcon size={size} round />
      </TelegramShareButton>
      <FacebookMessengerShareButton url={shareUrl}>
        <FacebookMessengerIcon size={size} round />
      </FacebookMessengerShareButton>
      <FacebookShareButton url={shareUrl} quote={title}>
        <FacebookIcon size={size} round />
      </FacebookShareButton>
      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={size} round />
      </WhatsappShareButton>
      <RedditShareButton url={shareUrl} title={title}>
        <RedditIcon size={size} round />
      </RedditShareButton>
      <LinkedinShareButton
        url={shareUrl}
        title={title}
        summary="Something really scary is here..."
      >
        <LinkedinIcon size={size} round />
      </LinkedinShareButton>
      <LineShareButton url={shareUrl} title={title}>
        <LineIcon size={size} round />
      </LineShareButton>
      <EmailShareButton
        subject={title}
        body="Something really scary is here... "
        url={shareUrl}
      >
        <EmailIcon round={true} size={size} />
      </EmailShareButton>
    </div>
  );
}

export default ShareComponent;
