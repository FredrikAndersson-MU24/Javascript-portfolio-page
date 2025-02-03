function RepoCard({
    title,
    description,
    image,
    link,
    imageRef = { imageRef },
    titleRef = { titleRef },
    descriptionRef = { descriptionRef },
}) {
    return (
        <>
            <h3 id="title" titleref={titleRef}>
                {title}
            </h3>
            <div className="repo-details">
                <p id="description" descriptionref={descriptionRef}>
                    {" "}
                    {description}
                </p>

                <img id="image" imageref={imageRef} src={image} />
                <button className="repo-button button">
                    <a id="link" href={link}>
                        About project
                    </a>
                </button>
            </div>
        </>
    );
}

export default RepoCard;
