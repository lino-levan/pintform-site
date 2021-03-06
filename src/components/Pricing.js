import '../styling/App.css'

function Pricing() {
    return (
        <div className='wrap center'>
            <div className='card'>
                <h3>Basic</h3>
                <p>Free</p>
                <div>
                <ul>
                    <li>1 User</li>
                    <li>Up to 1000 Responses / Month</li>
                    <li>Up to 10 Forms / Month</li>
                    <li>Unlimited Questions</li>
                    <li>Full access to editor</li>
                    <li>No Pintform Branding</li>

                    <li>Partial access to tasks</li>
                </ul>
                </div>
                <div className='card-button'><a href='https://webapp.pintform.com/login' className='button-filled'>Sign Up</a></div>
            </div>
            <div className='card'>
                <h3>Pro</h3>
                <p>$10 / user / month</p>
                <div>
                <ul>
                    <li>10 Users</li>
                    <li>Up to 10000 Responses / Month</li>
                    <li>Up to 100 Forms / Month</li>
                    <li>Unlimited Questions</li>
                    <li>Full access to editor</li>
                    <li>No Pintform Branding</li>

                    <li>Full access to tasks</li>
                    <li>Drop-Off Rates</li>
                    <li>Conversion Tracking</li>
                    <li>Limited File Uploads</li>
                </ul>
                </div>
                <div className='card-button'><a href='https://webapp.pintform.com/login' className='button-filled'>Sign Up</a></div>
            </div>
            <div className='card'>
                <h3>Business</h3>
                <p> Contact Sales</p>
                <div>
                    <ul>
                    <li>100 Users</li>
                    <li>Unlimited Responses</li>
                    <li>Unlimited Forms</li>
                    <li>Unlimited Questions</li>
                    <li>Full access to editor</li>
                    <li>No Pintform Branding</li>

                    <li>Full access to tasks</li>
                    <li>Drop-Off Rates</li>
                    <li>Conversion Tracking</li>
                    <li>Unlimited File Uploads</li>

                    <li>Self-hosting Access</li>
                    <li>Priority Support</li>
                    </ul>
                </div>
                <div className='card-button'><a href='https://webapp.pintform.com/login' className='button-filled'>Contact Sales</a></div>
            </div>
        </div>
    );
}
  
export default Pricing;
  