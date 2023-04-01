'use client';
import {code} from "@/lib/code";
import CoughieMDX from '@/app/artifact-detail/coughie/coughie.mdx';

export function Mdx() {
    return (
        <CoughieMDX components={{code}} />
    );
}
