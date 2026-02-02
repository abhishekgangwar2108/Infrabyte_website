type Pagedata = {
  title: string
}
const PageMeta = ({ title }: Pagedata) => {
  return (
    <title>
      {title
        ? `Infrabyte | ${title}`
        : "Infrabyte Technology"}
    </title>
  );
};

export default PageMeta;
 