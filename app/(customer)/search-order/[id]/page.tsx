import axios from "axios";

const fetchOrder = async (id: number) => {
  try {
    const response = await axios.get(`http://localhost:3001/orders/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
const page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  const orderDetails = await fetchOrder(id);
  return (
    <div>
      <h1>View Order status of order number {id}</h1>
      <p>Progress of the order: {orderDetails.progress}</p>
    </div>
  );
};

export default page;
