setTimeout(
    () =>
    {
        console.log("Called");
        const Matches = document.querySelectorAll("div")
        Matches.forEach(Element =>
        {
            const DivComputedStyle = window.getComputedStyle(Element);
            const bPropertyNameDisplayDiv =
                DivComputedStyle.width === "160px" &&
                DivComputedStyle.height === "34px" &&
                DivComputedStyle.display === "flex";

            if(bPropertyNameDisplayDiv && Element)
            {
                console.log(Element);
                Element.style.width = "360px";
            }
        });
    },
    1000
);

document.addEventListener("click", function()
{
    console.log("Called");
    const Matches = document.querySelectorAll("div");
    Matches.forEach(Element =>
    {
        const DivComputedStyle = window.getComputedStyle(Element);
        const bPropertyNameDisplayDiv =
            DivComputedStyle.width === "160px" &&
            DivComputedStyle.height === "34px" &&
            DivComputedStyle.display === "flex";

        if(bPropertyNameDisplayDiv && Element)
        {
            console.log(Element);
            Element.style.width = "360px";
        }
    });
});