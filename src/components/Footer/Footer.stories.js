import Footer from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,

  args: {
    children: "© 2023 Honest Reviews. TUTTI I DIRITTI RISERVATI",
  },
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
