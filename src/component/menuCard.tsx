import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { Col } from "react-bootstrap";

type MenuCardProps = {
    imagePath?: string;
    title?: string;
    data: any
}
export default function MenuCard({ imagePath, title, data }: MenuCardProps) {
    return (
        data.map((item: { imagePath: string | StaticImport; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
            <Col>
            <Link href={""}>
                <div className=" hover:bg-blue-900 hover:rounded-lg hover:p-4 p-4">
                    <Image
                        src={item.imagePath}
                        alt="External Image"
                        unoptimized
                        width={60}
                        height={60}
                        className="mb-3"
                    />
                    <div className="text-lg font-semibold font-sans mb-1 text-white">{item.title}</div>
                </div>
                
            </Link>
            </Col>
        ))
    )
}