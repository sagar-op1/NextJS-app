/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cHO0TBvuBVQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
/*
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import React from "react"

export default function Component() {
  return <div className="bg-[#f7f7f7]">
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Design.AGENCY</h1>
      <nav className="flex space-x-4">
        <Link href="#" className="text-sm" prefetch={false}>Services</Link>
        <Link href="#" className="text-sm" prefetch={false}>About Us</Link>
        <Link href="#" className="text-sm" prefetch={false}>Contact Us</Link>
        <Button variant="ghost" className="text-sm">Login</Button>
        <Button className="text-sm">Register</Button>
        </nav>
        </header>
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-5xl font-bold">Increase Your Customers Loyalty and Satisfaction</h2>
          <p className="mt-4 text-lg">We help businesses like yours earn more customers, standout from competitors, make more money</p>
          <Button className="mt-6">Get Started</Button>
          </section>
          <section className="container mx-auto px-4 py-16">
            <div className="flex justify-center space-x-8">
              <img src="/placeholder.svg" alt="Google"/>
              <img src="/placeholder.svg" alt="Trello"/>
              <img src="/placeholder.svg" alt="Monday.com"/>
              <img src="/placeholder.svg" alt="Notion"/>
              <img src="/placeholder.svg" alt="Slack"/>
              </div></section>
              <section className="container mx-auto px-4 py-16">
                <h3 className="text-3xl font-bold text-center">WHAT WE DO</h3>
                <p className="text-xl text-center mt-4 mb-12">We provide the Perfect Solution to your business growth</p>
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center"><LightbulbIcon className="mx-auto mb-4" />
                  <h4 className="font-bold">Grow Your Business</h4>
                  <p className="mt-2">We help identify the best ways to improve your business</p>
                  <Link href="#" className="mt-4 inline-block" prefetch={false}>Learn More</Link>
                  </div>
                  <div className="text-center"><HeartIcon className="mx-auto mb-4" />
                  <h4 className="font-bold">Improve brand loyalty</h4>
                  <p className="mt-2">We help identify the best ways to improve your business</p>
                  <Link href="#" className="mt-4 inline-block" prefetch={false}>Learn More</Link>
                  </div>
                  <div className="text-center"><BarChartIcon className="mx-auto mb-4" />
                  <h4 className="font-bold">Improve Business Model</h4>
                  <p className="mt-2">We help identify the best ways to improve your business</p>
                  <Link href="#" className="mt-4 inline-block" prefetch={false}>Learn More</Link>
                  </div>
                  </div>

                  <div className="grid grid-cols-4 gap-8 mt-16">
                    <div className="text-center"><FolderIcon className="mx-auto mb-4" />
                    <h5 className="font-bold">Completed Projects</h5>
                    <p className="mt-2 font-bold text-lg">100 +</p>
                    </div>
                    <div className="text-center">
                      <SmileIcon className="mx-auto mb-4" />
                    <h5 className="font-bold">Customer Satisfaction</h5>
                    <p className="mt-2 font-bold text-lg">20 %</p>
                    </div>
                    <div className="text-center">
                      <DollarSignIcon className="mx-auto mb-4" />
                    <h5 className="font-bold">Raised by Clients</h5>
                    <p className="mt-2 font-bold text-lg">$10M</p>
                    </div>
                    <div className="text-center"><CalendarIcon className="mx-auto mb-4" />
                    <h5 className="font-bold">Years in Business</h5>
                    <p className="mt-2 font-bold text-lg">2 yrs</p>
                    </div>
                    </div>
                    </section>
                    <section className="container mx-auto px-4 py-16">
                      <h3 className="text-3xl font-bold text-center">OUR PORTFOLIO</h3>
                      <p className="text-xl text-center mt-4 mb-12">We provide the Perfect Solution to your business growth</p>
                      <div className="grid grid-cols-2 gap-8">
                        <img src="/placeholder.svg" alt="Digital Marketing Agency Website"/>
                        <img src="/placeholder.svg" alt="Digital Marketing Agency Website"/>
                        <img src="/placeholder.svg" alt="Digital Marketing Agency Website"/>
                        <img src="/placeholder.svg" alt="Digital Marketing Agency Website"/>
                        </div>
                        </section>
                        <section className="bg-[#e6f5f1] py-16">
                          <div className="container mx-auto px-4">
                            <h3 className="text-3xl font-bold text-center">TESTIMONIALS</h3>
                            <p className="text-xl text-center mt-4 mb-12">See What Our Customer Say About Us</p>
                            <div className="flex space-x-8">
                              <Button variant="ghost" className="flex-shrink-0"></Button>
                              <div className="flex-1 grid grid-cols-3 gap-8">
                                <Card className="bg-white">
                                  <CardContent>
                                    <p className="text-sm">Thank You for your service. I am very pleased with the result. I have seen exponential growth in my business and its all thanks to your amazing service</p>
                                    <p className="mt-4 font-bold">Emily Stones</p>
                                    <p className="text-sm">CEO, Marketing Guru</p>
                                    </CardContent>
                                    </Card>
                                    <Card className="bg-white">
                                      <CardContent>
                                        <p className="text-sm">Thank You for your service. I am very pleased with the result. I have seen exponential growth in my business and its all thanks to your amazing service</p>
                                        <p className="mt-4 font-bold">Emily Stones</p>
                                        <p className="text-sm">CEO, Marketing Guru</p>
                                        </CardContent>
                                        </Card>
                                        <Card className="bg-white">
                                          <CardContent>
                                            <p className="text-sm">Thank You for your service. I am very pleased with the result. I have seen exponential growth in my business and its all thanks to your amazing service</p>
                                            <p className="mt-4 font-bold">Emily Stones</p>
                                            <p className="text-sm">CEO, Marketing Guru</p>
                                            </CardContent>
                                            </Card>
                                            </div>
                                            <Button variant="ghost" className="flex-shrink-0"></Button>
                                            </div>
                                            </div>
                                            </section>
                                            <section className = "container mx-auto px-4 py-16" > 
                                              <h3 className="text-3xl font-bold text-center">SUBSCRIBE</h3> 
                                              < p className = "text-xl text-center mt-4 mb-12" > Subscribe
                                              To Get The Latest News About Us</p>
                                              <p className="text-center text-sm mb-4">Please Drop Your Email Below To Get Daily Update About What We Do</p>
                                              <div className="flex justify-center">
                                                <Input placeholder="Enter Your Email Address" className="w-1/3"/>
                                                <Button className="ml-4">Subscribe</Button>
                                                </div>
                                                </section>
                                                <footer className="bg-[#333] text-white py-8">
                                                  <div className="container mx-auto px-4 grid grid-cols-3 gap-8">
                                                    <div>
                                                      <h5 className="font-bold mb-2">WEB LOGO</h5>
                                                    <p className="text-sm">Some footer text about the Agency. Just a little description to help people understand you better</p>
                                                    <div className="flex space-x-2 mt-4">
                                                      <FacebookIcon className="h-6 w-6" />
                                                      <TwitterIcon className="h-6 w-6" />
                                                      <LinkedinIcon className="h-6 w-6" />
                                                      <InstagramIcon className="h-6 w-6" />
                                                      </div>
                                                      </div>
                                                      <div>
                                                        <h5 className="font-bold mb-2">Quick Links</h5>
                                                        <ul className="space-y-1 text-sm">
                                                          <li>
                                                            <Link href="#" className="hover:underline" prefetch=
                                                             {false}>Services</Link>
                                                             </li>
                                                             <li>
                                                              <Link href="#" className="hover:underline" prefetch={false}>Portfolio</Link>
                                                              </li>
                                                              <li>
                                                                <Link href="#" className="hover:underline" prefetch={false}>About Us</Link>
                                                                </li>
                                                                <li>
                                                                  <Link href="#" className="hover:underline" prefetch={false}>Contact Us</Link>
                                                                  </li>
                                                                  </ul>
                                                                  </div>
                                                                  <div>
                                                                    <h5 className="font-bold mb-2">Address</h5>
                                                                    <p className="text-sm">Design Agency Head Office. Airport Road United Arab Emirate</p>
                                                                    </div>
                                                                    </div>
                                                                    <p className="text-center text-sm mt-8">Copyright Design Agency 2022</p>
                                                                    </footer>
                                                                    </div>
                                                                    }

                                                                    function BarChartIcon(props) {
                                                                      return (
                                                                        <svg
                                                                          {...props}
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          width="24"
                                                                          height="24"
                                                                          viewBox="0 0 24 24"
                                                                          fill="none"
                                                                          stroke="currentColor"
                                                                          strokeWidth="2"
                                                                          strokeLinecap="round"
                                                                          strokeLinejoin="round"
                                                                        >
                                                                          <line x1="12" x2="12" y1="20" y2="10" />
                                                                          <line x1="18" x2="18" y1="20" y2="4" />
                                                                          <line x1="6" x2="6" y1="20" y2="16" />
                                                                        </svg>
                                                                      )
                                                                    }
                                                                    
                                                                    
                                                                    function CalendarIcon(props) {
                                                                      return (
                                                                        <svg
                                                                          {...props}
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          width="24"
                                                                          height="24"
                                                                          viewBox="0 0 24 24"
                                                                          fill="none"
                                                                          stroke="currentColor"
                                                                          strokeWidth="2"
                                                                          strokeLinecap="round"
                                                                          strokeLinejoin="round"
                                                                        >
                                                                          <path d="M8 2v4" />
                                                                          <path d="M16 2v4" />
                                                                          <rect width="18" height="18" x="3" y="4" rx="2" />
                                                                          <path d="M3 10h18" />
                                                                        </svg>
                                                                      )
                                                                    }
                                                                    
                                                                    
                                                                    function DollarSignIcon(props) {
                                                                      return (
                                                                        <svg
                                                                          {...props}
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          width="24"
                                                                          height="24"
                                                                          viewBox="0 0 24 24"
                                                                          fill="none"
                                                                          stroke="currentColor"
                                                                          strokeWidth="2"
                                                                          strokeLinecap="round"
                                                                          strokeLinejoin="round"
                                                                        >
                                                                          <line x1="12" x2="12" y1="2" y2="22" />
                                                                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                                                        </svg>
                                                                      )
                                                                    }
                                                                    
                                                                    
                                                                    function FacebookIcon(props) {
                                                                      return (
                                                                        <svg
                                                                          {...props}
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          width="24"
                                                                          height="24"
                                                                          viewBox="0 0 24 24"
                                                                          fill="none"
                                                                          stroke="currentColor"
                                                                          strokeWidth="2"
                                                                          strokeLinecap="round"
                                                                          strokeLinejoin="round"
                                                                        >
                                                                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                                        </svg>
                                                                      )
                                                                    }
                                                                    
                                                                    
                                                                    function FolderIcon(props) {
                                                                      return (
                                                                        <svg
                                                                          {...props}
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          width="24"
                                                                          height="24"
                                                                          viewBox="0 0 24 24"
                                                                          fill="none"
                                                                          stroke="currentColor"
                                                                          strokeWidth="2"
                                                                          strokeLinecap="round"
                                                                          strokeLinejoin="round"
                                                                        >
                                                                          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                                                                        </svg>
                                                                      )
                                                                    }
                                                                    
                                                                    
                                                                    function HeartIcon(props) {
                                                                      return (
                                                                        <svg
                                                                          {...props}
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          width="24"
                                                                          height="24"
                                                                          viewBox="0 0 24 24"
                                                                          fill="none"
                                                                          stroke="currentColor"
                                                                          strokeWidth="2"
                                                                          strokeLinecap="round"
                                                                          strokeLinejoin="round"
                                                                        >
                                                                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                                                        </svg>
                                                                      )
                                                                    }
                                                                    
                                                                    
                                                                    function InstagramIcon(props) {
                                                                      return (
                                                                        <svg
                                                                          {...props}
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          width="24"
                                                                          height="24"
                                                                          viewBox="0 0 24 24"
                                                                          fill="none"
                                                                          stroke="currentColor"
                                                                          strokeWidth="2"
                                                                          strokeLinecap="round"
                                                                          strokeLinejoin="round"
                                                                        >
                                                                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                                                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                                                        </svg>
                                                                      )
                                                                    }
                                                                    
                                                                    
                                                                    function LightbulbIcon(props) {
                                                                      return (
                                                                        <svg
                                                                          {...props}
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          width="24"
                                                                          height="24"
                                                                          viewBox="0 0 24 24"
                                                                          fill="none"
                                                                          stroke="currentColor"
                                                                          strokeWidth="2"
                                                                          strokeLinecap="round"
                                                                          strokeLinejoin="round"
                                                                        >
                                                                          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                                                                          <path d="M9 18h6" />
                                                                          <path d="M10 22h4" />
                                                                        </svg>
                                                                      )
                                                                    }
                                                                    
                                                                    
                                                                    function LinkedinIcon(props) {
                                                                      return (
                                                                        <svg
                                                                          {...props}
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          width="24"
                                                                          height="24"
                                                                          viewBox="0 0 24 24"
                                                                          fill="none"
                                                                          stroke="currentColor"
                                                                          strokeWidth="2"
                                                                          strokeLinecap="round"
                                                                          strokeLinejoin="round"
                                                                        >
                                                                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                                          <rect width="4" height="12" x="2" y="9" />
                                                                          <circle cx="4" cy="4" r="2" />
                                                                        </svg>
                                                                      )
                                                                    }
                                                                    
                                                                    
                                                                    function SmileIcon(props) {
                                                                      return (
                                                                        <svg
                                                                          {...props}
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          width="24"
                                                                          height="24"
                                                                          viewBox="0 0 24 24"
                                                                          fill="none"
                                                                          stroke="currentColor"
                                                                          strokeWidth="2"
                                                                          strokeLinecap="round"
                                                                          strokeLinejoin="round"
                                                                        >
                                                                          <circle cx="12" cy="12" r="10" />
                                                                          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                                                          <line x1="9" x2="9.01" y1="9" y2="9" />
                                                                          <line x1="15" x2="15.01" y1="9" y2="9" />
                                                                        </svg>
                                                                      )
                                                                    }
                                                                    
                                                                    
                                                                    function TwitterIcon(props) {
                                                                      return (
                                                                        <svg
                                                                          {...props}
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          width="24"
                                                                          height="24"
                                                                          viewBox="0 0 24 24"
                                                                          fill="none"
                                                                          stroke="currentColor"
                                                                          strokeWidth="2"
                                                                          strokeLinecap="round"
                                                                          strokeLinejoin="round"
                                                                        >
                                                                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                                                        </svg>
                                                                      )
                                                                    }
