import Image from "next/image";


type SummaryItemProps = {
  title: string;
  price: number;
  image: string;
  quantity: number;
};
const SummaryItem = ({title, price, image, quantity}: SummaryItemProps) => {
   
    return (
    <div className="py-6 border-b space-y-6 px-8">
      <div className="grid grid-cols-6 gap-2 border-b-1">
        <div className="col-span-1 self-center">
          <Image
            width={100}
            height={50}
            src={image}
            alt="Product"
            className="rounded w-full p-1"
          />
        </div>
        <div className="flex flex-col col-span-3 pt-2">
          <span className="text-gray-600 text-md font-semi-bold">
            {title}
          </span>
          <span className="text-gray-400 text-sm inline-block pt-2">
            Red Headphone
          </span>
        </div>
        <div className="col-span-2 pt-3">
          <div className="flex items-center space-x-2 text-sm justify-between">
            <span className="text-gray-400">{quantity} x ${price}</span>
            <span className="text-pink-400 font-semibold inline-block">
              €61.98
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryItem;
