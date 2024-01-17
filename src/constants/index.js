import { truck } from "../assets/icons"
import { faLock, faBox, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons"

export const navLinks = [
    {href: '/',label: 'Home'},
    {href: '/shop',label: 'Shop'},
    {href: '/about',label: 'About us'},
    {href: '/contact',label: 'Contact'},
 ]


export const products = [
    {imgUrl: truck, name: 'Rooted in earth', description:'Curabitur ullamcorper ultricies nisi.', price: 10000},
    {imgUrl: truck, name: 'Woven in harmony', description:'Curabitur ullamcorper ultricies nisi.', price: 10000},
    {imgUrl: truck, name: 'Flourishing with earth', description:'Curabitur ullamcorper ultricies nisi.', price: 10000},
    {imgUrl: truck, name: 'Fast & Fresh Delivery', description:'Curabitur ullamcorper ultricies nisi.', price: 10000},
    {imgUrl: truck, name: 'Healthy Product', description:'Curabitur ullamcorper ultricies nisi.', price: 10000},
    {imgUrl: truck, name: 'Natural Process', description:'Curabitur ullamcorper ultricies nisi.', price: 10000},
]


export const services = [
    {
        icon:"faLock", title: 'SECURE PAYMENTS', desc: 'Curabitur interdum, nisl at tincidunt.'
    },{
        icon: "faBox", title: 'DELIVERED WITH CARE', desc: 'Donec sit amet neque id nisl.'
    },{
        icon:"faHandHoldingHeart", title: 'EXCELLENT', desc: 'Amet neque id nisl ullamcorper.'
    }
]
