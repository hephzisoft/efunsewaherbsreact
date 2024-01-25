import { truck } from "../assets/icons"

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

export const contact = [
    {
        icon:"location-dot", title:'VISIT US', desc: '1234 Somewhere Road, Nashville, TN 00000'
    },{
        icon :'phone',title:'CALL US', desc: '+00 0000 000000'
    },{
        icon:'envelope', title:'EMAIL US', desc: 'efunsewaherbs@gmail.com'
    }
]
