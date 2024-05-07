function FeatureItem({ imageSrc, title, description }: { imageSrc: string, title: string, description: string }) {
    return (
        <div className="flex gap-4 mb-8 lg:mb-0">
      <div>
      <img className="mb-2" src={imageSrc} alt="scroll" width={48} height={48} />
      </div>
            <div style={{ maxWidth: '380px' }}>
                <p className="font-UberMoveBold text-xl text-[#111110]">{title}</p>
                <div className="font-Avenir font-normal text-base text-[#11111080]">{description}</div>
            </div>
        </div>
    );
}

export default FeatureItem;