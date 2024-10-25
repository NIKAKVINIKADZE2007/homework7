type Props = {
  params: {
    id: string;
  };
};

const page = ({ params }: Props) => {
  return <div className='text-black'>your product id is {params.id}</div>;
};

export default page;
