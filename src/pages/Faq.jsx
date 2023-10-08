const Faq = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className=" my-6 text-center text-white font-bold text-4xl border-y-2 py-3">
        Frequent Asked Questions
      </h2>
      <div className="flex p-3 flex-col md:flex-row">
        <div className="flex-1">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Can I get a refund or exchange my tickets if I can`t attend an
              event?
            </div>
            <div className="collapse-content">
              <p>
                Refund and exchange policies vary depending on the event and the
                ticket provider. Please refer to the event`s specific terms and
                conditions for details on refunds, exchanges, and cancellation
                policies.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Are there any discounts available for students, seniors, or group
              bookings?
            </div>
            <div className="collapse-content">
              <p>
                Yes, many events offer discounts for students, seniors, and
                group bookings. Look for specific pricing options on the event
                pages or contact our customer support for information on
                available discounts.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How will I receive my tickets after purchase?
            </div>
            <div className="collapse-content">
              <p>
                After you complete your purchase, you will receive an email
                confirmation with your e-tickets, which you can either print or
                display on your mobile device for entry. Some events also offer
                physical ticket options, and in such cases, they will be mailed
                to the address provided during checkout.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Is there a mobile app available for easy access to event
              information and tickets?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we offer a mobile app for both iOS and Android devices. You
                can download our app for easy access to event listings, ticket
                purchases, and event updates.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Do you offer customer support for event-related inquiries or
              issues?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely! Our customer support team is available to assist you
                with any event-related inquiries, ticketing issues, or general
                assistance. You can reach us through our contact page, email, or
                phone during our business hours.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can I transfer my tickets to someone else if I can`t attend an
              event?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can typically transfer your tickets to another person
                if you can`t attend an event. Check the specific event`s
                transfer policy, and if allowed, follow the provided
                instructions to update the ticket holder`s information.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Do you offer accessibility accommodations for individuals with
              special needs or disabilities?
            </div>
            <div className="collapse-content">
              <p>
                We strive to make events accessible to everyone. Many venues
                provide accommodations for individuals with special needs or
                disabilities. Please check the event details or contact our
                customer support to inquire about available accessibility
                services and accommodations.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 mx-auto justify-center items-center flex">
          <img src="/src/assets/The Little Things - UI Design.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
