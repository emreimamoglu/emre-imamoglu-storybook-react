import Searchbar from "./Searchbar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Navbar/Searchbar",
  component: Searchbar,
  argTypes: {
    searchBoxBackground: { control: "color", default: "#2f3640" },
    searchIconColor: { control: "color", default: "#e84118" },
    searchIconBackground: { control: "color", default: "#2f3640" },
    searchInputColor: { control: "color", default: "white" },
    scale: { control: { type: "range", min: 0.3, max: 2, step: 0.1 } },
    placeholder: { type: "string", default: "Type to search" },
  },
} as ComponentMeta<typeof Searchbar>;

const BaseComponent: ComponentStory<typeof Searchbar> = (args) => (
  <Searchbar {...args} />
);

export const CustomizableSearchbar = BaseComponent.bind({});
