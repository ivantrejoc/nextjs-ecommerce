const CheckoutForm = () => {
  return (
    <div className="w-full mx-auto  text-gray-800 font-light mb-6 shadow-lg">
      <form id="payment-form" method="POST" action="">
        <section className="w-full p-3 bg-white rounded-md border border-gray-200">
          <fieldset className=" bg-white text-gray-800">
            <div className="mb-3">
              <label className="text-gray-600 font-semibold text-sm mb-2">
                <span className="text-right ">Name</span>
              </label>
              <input
                name="name"
                className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1  focus:ring-blue-300 transition-colors"
                placeholder="John Smith"
              />
            </div>
            <div className="mb-3">
              <label className="text-gray-600 font-semibold text-sm mb-2">
                <span className="text-right">Email</span>
              </label>
              <input
                name="email"
                type="email"
                className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1  focus:ring-blue-300 transition-colors"
                placeholder="john@mail.com"
              />
            </div>
            <div className="mb-3">
              <label className="text-gray-600 font-semibold text-sm mb-2">
                <span className="text-right">Address</span>
              </label>
              <input
                name="address"
                className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1  focus:ring-blue-300 transition-colors"
                placeholder="10 Street XYZ 654"
              />
            </div>
            <div className="mb-3">
              <label className="text-gray-600 font-semibold text-sm mb-2">
                <span className="text-right">City</span>
              </label>
              <input
                name="city"
                className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1  focus:ring-blue-300 transition-colors"
                placeholder="San Francisco"
              />
            </div>
            <div className="mb-3">
              <label className="text-gray-600 font-semibold text-sm mb-2">
                <span className="text-right mr-2">State</span>
              </label>
              <input
                name="state"
                className="w-1/3 x-3 py-2 mb-1 border rounded-md focus:outline-none focus:ring-1  focus:ring-blue-300 transition-colors"
                placeholder="CA"
              />

              <label className="text-gray-600 font-semibold text-sm mb-2 ml-3">
                <span className="text-right xl:px-0 xl:text-none mr-2">
                  ZIP
                </span>
              </label>
              <input
                name="postal_code"
                className="w-1/3 x-3 py-2 mb-1 border rounded-md focus:outline-none focus:ring-1  focus:ring-blue-300 transition-colors"
                placeholder="98603"
              />
            </div>
            <div className="mb-1">
              <label className="flex text-gray-600 font-semibold text-sm mb-2 ml-1 items-center select relative">
                <span className="text-right">Country</span>
              </label>

              <select
                name="country"
                className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1  focus:ring-blue-300 transition-colors cursor-pointer"
              >
                <option value="AU">Australia</option>
                <option value="BE">Belgium</option>
                <option value="BR">Brazil</option>
                <option value="CA">Canada</option>
                <option value="CN">China</option>
                <option value="DK">Denmark</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="HK">Hong Kong</option>
                <option value="IE">Ireland</option>
                <option value="IT">Italy</option>
                <option value="JP">Japan</option>
                <option value="LU">Luxembourg</option>
                <option value="MX">Mexico</option>
                <option value="NL">Netherlands</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="SG">Singapore</option>
                <option value="ES">Spain</option>
                <option value="TN">Tunisia</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
              </select>
            </div>
          </fieldset>
        </section>
      </form>
    </div>
  );
};

export default CheckoutForm;
