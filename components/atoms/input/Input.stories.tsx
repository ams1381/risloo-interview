import type { Meta, StoryObj } from '@storybook/react';
import {Input} from "@/components/atoms/input/Input";
import {useState} from "react";


const meta = {
    title: 'components/atoms/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: function InputComponent(args) {
        const [value, setValue] = useState(args.value || '');

        return (
            <Input
                {...args}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    },
    args: {
        placeholder : 'input' ,
        value : 'AMS' ,
    },
};
