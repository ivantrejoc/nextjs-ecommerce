import Image from "next/image";


type SummaryItemProps = {
  title: string;
  price: number;
  image: string;
  quantity: number;
};
const SummaryItem = ({title, price, image, quantity}: SummaryItemProps) => {
   
  const subtotal = (price * quantity).toFixed(2);
    return (
    <div className="py-6 border-b space-y-6 px-6">
      <div className="flex justify-between gap-3 border-b-1">
        <div className="col-span-1 max-h-40 self-center">
          <Image
            width={60}
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
        </div>
        <div className="col-span-2 flex">
          <div className="w-6/12  items-center px-1 pt-3 space-x-2 text-xs block">
            <span className="text-gray-400 text-xs px-2 mt-2">{quantity} x ${price.toFixed(2)}</span>
            
          </div>
          <span className="w-6/12 pt-6 text-gray-700 font-semibold block justify-end">
              ${subtotal}
            </span>
        </div>
      </div>
    </div>
  );
};

export default SummaryItem;
