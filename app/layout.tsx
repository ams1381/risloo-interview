import type {Metadata} from "next";
import "./globals.css";
import React from "react";



export const metadata: Metadata = {
    title: "لیست مراکز مشاوره ریسلو",
    description: "یک متن تستی برای متا دسکریپشن ریسلو",
    openGraph : {
        title : 'عنوان تستی برای لیست مراکز مشاوره' ,
        description : 'یک متن تستی برای تگ اوپن گراف ریسلو' ,
        locale: "fa_IR",
        siteName : 'Risloo',
        type : 'website' ,
        url : 'https://risloo.ir',
        images : {
            url : 'https://risloo.ir',

        }
    },
    publisher : 'ریسلو',
    robots: {
        follow: true,
        index: true ,
        "max-snippet": -1,
        "max-video-preview": -1,
        "max-image-preview": "large",
    },
    alternates : {
        canonical : 'https://risloo.ir',
        languages : {
            "fa-IR" : 'https://risloo.ir'
        }
    },
    keywords : ['روانشناسی' , 'مرکز مشاوره' , 'ریسلو'],
    
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`antialiased`} >
                {children}
            </body>
        </html>
    );
}
