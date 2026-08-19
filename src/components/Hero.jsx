import { ArrowDown } from 'lucide-react';
import { personalData } from '../data/personalData';

const Hero = () => {
    return (
        <section
            className="
                relative
                flex
                min-h-screen
                items-end
                overflow-hidden
                px-5
                pb-7
                pt-28
                sm:px-8
                sm:pb-10
                sm:pt-32
                lg:px-10
            "
        >
            {/* Ambient glow */}
            <div
                className="
                    absolute
                    left-1/2
                    top-[20%]
                    h-[20rem]
                    w-[20rem]
                    -translate-x-1/2
                    rounded-full
                    bg-blue-200/50
                    blur-[110px]
                    sm:top-[25%]
                    sm:h-[30rem]
                    sm:w-[30rem]
                    sm:blur-[140px]
                "
            />

            <div className="relative mx-auto w-full max-w-7xl">
                <div className="max-w-6xl">

                    {/* Main Heading */}
                    <h1
                        className="
                            max-w-5xl
                            text-[clamp(2.9rem,12vw,5rem)]
                            font-medium
                            leading-[0.9]
                            tracking-[-0.065em]
                            text-neutral-950
                            sm:text-[clamp(4.2rem,8vw,7.5rem)]
                            sm:leading-[0.86]
                            sm:tracking-[-0.075em]
                            lg:text-[clamp(5rem,8vw,9rem)]
                        "
                    >
                        Building digital
                        <br />
                        <span className="text-neutral-300">
                            experiences
                        </span>
                        <br />
                        with intention.
                    </h1>

                    {/* Description + CTA */}
                    <div
                        className="
                            mt-8
                            flex
                            flex-col
                            justify-between
                            gap-7
                            border-t
                            border-black/[0.08]
                            pt-5
                            sm:mt-14
                            sm:flex-row
                            sm:items-end
                            sm:gap-8
                            sm:pt-6
                        "
                    >
                        <p
                            className="
                                max-w-md
                                text-[12px]
                                leading-5
                                text-neutral-500
                                sm:text-[15px]
                                sm:leading-7
                            "
                        >
                            Frontend-focused developer crafting thoughtful
                            interfaces, interactive products, and digital
                            experiences with React, TypeScript, and modern
                            web technologies.
                        </p>

                        <a
                            href="#work"
                            className="
                                group
                                flex
                                w-fit
                                items-center
                                gap-2.5
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.14em]
                                text-neutral-950
                                sm:gap-3
                                sm:text-[11px]
                                sm:tracking-[0.15em]
                            "
                        >
                            Explore selected work

                            <span
                                className="
                                    flex
                                    h-8
                                    w-8
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-black/[0.1]
                                    transition-all
                                    group-hover:bg-neutral-950
                                    group-hover:text-white
                                    sm:h-9
                                    sm:w-9
                                "
                            >
                                <ArrowDown
                                    size={13}
                                    strokeWidth={1.5}
                                    className="sm:h-[14px] sm:w-[14px]"
                                />
                            </span>
                        </a>
                    </div>
                </div>

                {/* Personal Data */}
                <div
                    className="
                        mt-12
                        grid
                        border-t
                        border-black/[0.08]
                        sm:mt-16
                        sm:grid-cols-4
                    "
                >
                    {personalData.map((item, index) => (
                        <div
                            key={item.label}
                            className={`
                                py-3.5
                                sm:px-5
                                sm:py-4
                                ${
                                    index !== 0
                                        ? 'border-t border-black/[0.06] sm:border-l sm:border-t-0'
                                        : ''
                                }
                                first:sm:pl-0
                            `}
                        >
                            <p
                                className="
                                    text-[8px]
                                    font-medium
                                    uppercase
                                    tracking-[0.15em]
                                    text-neutral-400
                                    sm:text-[9px]
                                    sm:tracking-[0.16em]
                                "
                            >
                                {item.label}
                            </p>

                            <p
                                className={`
                                    mt-1
                                    text-[11px]
                                    font-medium
                                    sm:mt-1.5
                                    sm:text-xs
                                    ${
                                        item.label === 'System Status'
                                            ? 'flex items-center gap-2'
                                            : ''
                                    }
                                    ${
                                        item.color === 'text-white'
                                            ? 'text-neutral-950'
                                            : item.color
                                    }
                                `}
                            >
                                {item.label === 'System Status' && (
                                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                                )}

                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;