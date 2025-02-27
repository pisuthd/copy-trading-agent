'use client';

import { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

import Loading from '@/components/Loading';

import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

export function Providers({ children }: any) {

    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    useEffect(() => {

        const screenLoader = document.getElementsByClassName('screen_loader');
        if (screenLoader?.length) {
            setTimeout(() => {
                setShowLoader(false);
            }, 200);
        }

    });

    return (
        <> 
            {/* screen loader  */}
            {showLoader && (
                <Loading />
            )}
            {children}
        </>
    );
}

