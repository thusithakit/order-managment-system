const fetchOrder = async () => {
  try {
  } catch (err) {
    console.log(err);
  }
};
const page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  return (
    <div>
      <h1>View Order status of order number {id}</h1>
    </div>
  );
};

export default page;
