
import {PayPalButtons} from "@paypal/react-paypal-js";

export default function DummyPaypalCheckout() {
    return (
        <>
            <div>
                <h2>Pay with Paypal</h2>
                <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: "9.99", // replace with your actual amount
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            alert(`Transaction completed by ${details.payer.name.given_name}`);
                            // handle success (e.g., update backend, show confirmation, etc.)
                        });
                    }}
                />

            </div>
        </>
    )
}