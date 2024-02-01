import { CheckoutForm } from "../components/CheckoutForm";
import { OrderSummary } from "../components/OrderSummary";
import PaymentRunway from "../components/PaymentRunway/PaymentRunway";

const Checkout = () => {
  return (
    <main>
      <div className="bg-gray-200 w-full h-full max-w-full py-2 flex flex-col lg:flex-row justify-center items-center">
      <div className="flex flex-col mt-3 w-5/6 lg:w-2/5 align-center">
          <OrderSummary />
        </div>
        <div className="lg:col-span-2 col-span-3 space-y-8 px-12 mt-6">
          <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
            <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
              <div className="text-red-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 sm:w-5 h-6 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-sm font-medium ml-3">Checkout</div>
            </div>
            <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
              Complete your shipping and payment details below.
            </div>
          </div>
          <div>
            <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
              Shipping & Billing Information
            </h2>
            <CheckoutForm />
          </div>
          <div className="rounded-md">
            <section>
              <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2 mb-3">
                Payment Information
              </h2>
              <PaymentRunway />
            </section>
          </div>
        </div>
        
      </div>
    </main>
  );
};

export default Checkout;
