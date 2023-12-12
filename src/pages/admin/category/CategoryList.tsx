import { useDeleteCategoryMutation, useGetCategoriesQuery } from '@/app/services/category';
import { Category } from '@/interfaces/category';
import { Button, Card, Popconfirm, Space, Table, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { NavLink } from 'react-router-dom';

interface DataType {
  _id: string,
  id: number;
  name: string;
}

const CategoryList = () => {
  const { isLoading, data: response } = useGetCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation()

  const handleDeleteCategory = async (id: string | undefined) => {
    try {
      const response = await deleteCategory(id).unwrap()
      message.success(response.message)
    } catch (error) {
      message.error('Có lỗi xảy ra khi xóa danh mục')
    }
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
          <NavLink to={`/admin/category/edit/${category._id}`}>
            <Button type='dashed'>Sửa</Button>
          </NavLink>
          <Popconfirm
            title="Xóa danh mục"
            description="Bạn có chắc muốn xóa không?"
            okText="Xóa"
            onConfirm={() => handleDeleteCategory(category._id)}
            cancelText="Không">
            <Button danger type="primary">
              Xóa
            </Button>
          </Popconfirm>
        </Space >
      ),
    },
  ];
  const dataSource = response?.data?.map((category: Category, index: number) => {
    return {
      id: index + 1,
      _id: category._id,
      name: category.name,
    };
  });

  return (
    <Card>
      <Table columns={columns} dataSource={dataSource} loading={isLoading} rowKey={'id'} />;
    </Card>
  )
};

export default CategoryList;
