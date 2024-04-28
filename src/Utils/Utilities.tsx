function FeatureItem({ imageSrc, title, description }: { imageSrc: string, title: string, description: string }) {
        return (
            <div className="flex gap-4 mb-8 lg:mb-0">
                <img className="mb-2" src={imageSrc} alt="scroll" width={50} height={50} />
                <div>
                    <p className="font-UberMove font-bold text-xl text-[#111110]">{title}</p>
                    <p className="font-Avenir font-normal text-base text-[#11111080]">{description}</p>
                </div>
            </div>
        );
    }
    
export default FeatureItem;