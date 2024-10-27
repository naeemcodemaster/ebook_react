import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useRef } from "react"

function LoginPage() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const handleLogin = () => {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        
        

    }
    return (
        <section className="flex justify-center items-center h-screen">
            <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Add Email and Password to login with eBook</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="email" ref={emailRef} placeholder="Enter Email" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">Framework</Label>
                            <Input id="password" ref={passwordRef} placeholder="Enter Password" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between flex-col">

                <Button onClick={handleLogin} className="w-full">Sign in</Button>
                <div className="mt-2 text-center text-sm">
                        Don't have an account? {' '}
                        <Link to={'/auth/register'}>
                            Sign Up
                        </Link>
                    </div>
            </CardFooter>
        </Card>
        </section>
    )
}

export default LoginPage