import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

function Register() {
    return (
        <section className="flex justify-center items-center h-screen">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Add Email and Password to Sign Up with eBook</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid gap-4">

                            <div className="grid gap-2">
                                <Label htmlFor="full-name">Full name</Label>
                                <Input id="full-name" placeholder="Full name" required />
                            </div>


                            <div className="grid gap-2">
                                <Label htmlFor="email-name">Email</Label>
                                <Input id="email-name" placeholder="Email" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password-name">Password</Label>
                                <Input id="password-name" placeholder="Password" required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between flex-col">

                    <Button className="w-full">Sign Up</Button>
                    <div className="mt-2 text-center text-sm">
                        Already have an account? {' '}
                        <Link to={'/login'}>
                            Sign in
                        </Link>
                    </div>
                </CardFooter>
               
            </Card>
        </section>
    )
}

export default Register