import type { Meta, StoryObj } from '@storybook/react';
import '@/app/globals.css'
import {CounselingCenterList} from "@/components/organisms/counselingCenterList/CounselingCenterList";

const meta = {
    title: 'Components/organisms/counselingCenterList',
    component: CounselingCenterList,
    parameters: {
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
    },

    args: { },
} satisfies Meta<typeof CounselingCenterList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        searchValue : '',
        className : 'w-[1000px]'
    },
};
