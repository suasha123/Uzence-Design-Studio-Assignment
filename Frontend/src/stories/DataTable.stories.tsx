import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataTable } from "../assets/Component/table";
import '../index.css'
import { action } from "storybook/actions";

interface User {
  name: string;
  age: number;
  email: string;
}

interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

const users: User[] = [
  { name: 'John', age: 25, email: 'john@example.com' },
  { name: 'Alice', age: 30, email: 'alice@example.com' },
  { name: 'Bob', age: 20, email: 'bob@example.com' },
];

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' },
];

const UserDataTable = DataTable as unknown as React.FC<{
  data: User[];
  columns: Column<User>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (rows: User[]) => void;
}>;

const meta: Meta<typeof UserDataTable> = {
  title: 'Components/DataTable',
  component: UserDataTable,
};

export default meta;
type Story = StoryObj<typeof UserDataTable>;

// Default table
export const Default:  StoryObj<typeof UserDataTable> = {
  args: {
    data: users,
    columns: columns,
    selectable: true,
    loading: false,
    onRowSelect : action ("Row selected")
  },
   
};

// Loading state
export const Loading: Story = {
  args: {
    data: [],
    columns: columns,
    loading: true,
  },
};

// Empty state
export const Empty: Story = {
  args: {
    data: [],
    columns: columns,
    loading: false,
  },
};
