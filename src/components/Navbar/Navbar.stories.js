import Navbar from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,

  args: {
    settings: {
      navigation: [
        {
          url: "#",
          label: "Home",
        },
        {
          url: "#",
          label: "About",
        },
        {
          url: "#",
          label: "Post",
        },
      ],
    },
  },
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
