import { useGetCategoriesQuery } from '@/app/services/category';
import { Category } from '@/interfaces/category';
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  id: string;
  name: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Tên danh mục',
    dataIndex: 'name',
    key: 'name',
  },

  {
    title: 'Thao tác',
    key: 'action',
    render: (_, category) => (
      <Space size="middle">
        <Button type="dashed" href={`/admin/cateogry/${category.id}/edit`}>
          Sửa
        </Button>
        <Button type="primary" danger>
          Xóa
        </Button>
      </Space>
    ),
  },
];

const CategoryList = () => {
  const { isLoading, data: response } = useGetCategoriesQuery();

  const dataSource = response?.data?.map((category: Category) => {
    return {
      id: category._id,
      name: category.name,
    };
  });

  return <Table columns={columns} dataSource={dataSource} loading={isLoading} rowKey={'id'} />;
};

export default CategoryList;
