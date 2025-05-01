import axiosInstance from '../axios';

const getById = async (id: string) => {
  const url = `/lookup.php?i=${id}`;

  const { data } = await axiosInstance.get(url);

  return data.meals[0] || null;
};

export default getById;
