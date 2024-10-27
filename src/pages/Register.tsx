import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { useRef,useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { register } from "@/http/api"
import { LoaderCircle } from "lucide-react"
function Register() {
    const navigate = useNavigate();
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // State to store error message



    // Mutations
    const mutation = useMutation({
        mutationFn: register,
        onSuccess: () => {
            console.log("Login successfull")

            navigate('/dashboard/home')
        },
        onError: (error: any) => {
            // Handle the error and set the error message
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("An unknown error occurred.");
            }
        },
    })

    const handleRegister = () => {
        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        if (!name || !email || !password) {
            return alert('Please fill all the fields');
        }
        setErrorMessage(null);
        mutation.mutate({ name, email, password });


    }
    return (
        <section className="flex justify-center items-center h-screen">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Add Email and Password to Sign Up with eBook</CardDescription>
                    {/* {mutation.isError && <span className="text-red-500 text-sm">{mutation.error.message}</span>} */}
                    {errorMessage && (
                        <span className="text-red-500 text-sm">{errorMessage}</span>
                    )}
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid gap-4">

                            <div className="grid gap-2">
                                <Label htmlFor="full-name">Full name</Label>
                                <Input ref={nameRef} id="full-name" placeholder="Full name" required />
                            </div>


                            <div className="grid gap-2">
                                <Label htmlFor="email-name">Email</Label>
                                <Input ref={emailRef} id="email-name" placeholder="Email" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password-name">Password</Label>
                                <Input ref={passwordRef} id="password-name" placeholder="Password" required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between flex-col">

                    <Button onClick={handleRegister} className="w-full" disabled={mutation.isPending}>
                        {mutation.isPending && <LoaderCircle className="animate-spin" />}
                        <span>Sign Up</span>
                    </Button>
                    <div className="mt-2 text-center text-sm">
                        Already have an account? {' '}
                        <Link to={'/auth/login'}>
                            Sign in
                        </Link>
                    </div>
                </CardFooter>

            </Card>
        </section>
    )
}

export default Register