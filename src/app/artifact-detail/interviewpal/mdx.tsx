'use client';
import {code} from "@/lib/code";
import InterviewPalMDX from "@/app/artifact-detail/interviewpal/interviewpal.mdx";

export function Mdx() {
    return (
        <InterviewPalMDX components={{code}} />
    );
}
