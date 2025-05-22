import { Card, CardHeader, Image } from "@heroui/react";
import { useState, useEffect } from "react";

interface GalleryProps {
  searchQuery: string;
}

const Gallery: React.FC<GalleryProps> = ({ searchQuery }) => {
  // Fetch From ApI

  /*
  
  
  publisher	"101 Cookbooks"
title	"Best Pizza Dough Ever"
source_url	"http://www.101cookbooks.com/archives/001199.html"
recipe_id	"47746"
image_url	"http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg"
social_rank	100
publisher_url	"http://www.101cookbooks.com"
  
  */
  interface Recipe {
    publisher: string;
    title: string;
    source_url: string;
    recipe_id: string;
    image_url: string;
    social_rank: number;
    publisher_url: string;
  }

  const [Recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${searchQuery ? searchQuery : "pizza"}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
      });
  }, [searchQuery]);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Recipes.map((recipe) => (
        <Card
          className="h-[300px]"
          key={recipe.recipe_id}
          isisHoverable
          isPressable
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              {recipe.publisher}
            </p>
            <h4 className="text-white font-medium text-large">
              {recipe.title}
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            isZoomed
            isBlurred
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={recipe.image_url}
          />
        </Card>
      ))}
    </div>
  );
};

export default Gallery;
