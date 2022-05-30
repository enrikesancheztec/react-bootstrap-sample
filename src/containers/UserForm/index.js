import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './index.css';

const UserForm = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12"><Form.Label>Email address</Form.Label></div>
                        <div class="col-lg-4 col-md-6 col-sm-12"><Form.Control type="email" placeholder="Enter email" /></div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </div>
                    </div>
                </Form.Group>

                
                <div class="row">
                    {/* 66% */}
                    <div class="col-lg-8 col-md-12 col-sm-12">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12"><Form.Label>Password</Form.Label></div>
                                <div class="col-lg-6 col-md-6 col-sm-12"><Form.Control type="password" placeholder="Password" /></div>
                            </div>
                        </Form.Group>
                    </div>
                    {/* 33% */}
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                    </div>
                </div>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default UserForm;
