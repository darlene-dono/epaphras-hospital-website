
import { itemData } from "@/app/types/property/propertyData";
import { NextResponse } from "next/server";

const property: itemData[] = [
  {
    id: '1',
    item_img: "/images/properties/prop-1.jpg",
    item_title: "Modern Appartment",
    description: "Put some content in here to explain the card.............",
    slug: "pharmacy"
  },
  {
    id: '2',
    item_img: "/images/properties/prop-1.jpg",
    item_title: "Modern Appartment",
    description: "Put some content in here to explain the card.............",
    slug: "pharmacy"
  },
  {
    id: '3',
    item_img: "/images/properties/prop-1.jpg",
    item_title: "Modern Appartment",
    description: "Put some content in here to explain the card.............",
    slug: "pharmacy"
  },
    {
    id: '4',
    item_img: "/images/properties/prop-1.jpg",
    item_title: "Modern Appartment",
    description: "Put some content in here to explain the card.............",
    slug: "pharmacy"
  },
  {
    id: '5',
    item_img: "/images/properties/prop-1.jpg",
    item_title: "Modern Appartment",
    description: "Put some content in here to explain the card.............",
    slug: "pharmacy"
  },
  {
    id: '6',
    item_img: "/images/properties/prop-1.jpg",
    item_title: "Modern Appartment",
    description: "Put some content in here to explain the card.............",
    slug: "pharmacy"
  },

];

export async function GET() {
  return NextResponse.json(property);
}
