import ContentHeaderLeft from "./ContentHeaderLeft";
import ContentHeaderRight from "./ContentHeaderRight";

const ContentHeader = ({ Icon, Title, Variant }) => {
  const content =
    Variant === "Left" ? (
      <>
        <ContentHeaderLeft Title={Title} Icon={Icon} />
      </>
    ) : (
      <>
        <ContentHeaderRight Title={Title} Icon={Icon} />
      </>
    );
  return content;
};

export default ContentHeader;
