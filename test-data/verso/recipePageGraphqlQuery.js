export const recipePageQuery = {
  query: `fragment productField on Product {\n    id\n    brand {\n      name\n    }\n    awards {\n      name\n      date\n    }\n    category:connected{\n      edges {\n        node {\n          ...on Category {\n            hierarchy {\n              slug\n            }\n          }\n        }\n      }\n    }\n    contextualBody\n    contextualTitle\n    description\n    functionalTags {\n      name\n      slug\n    }\n    name\n    offers {\n      currency\n      comparisonPrice\n      purchaseUri: offerLink\n      offerId\n      offerType\n      price\n      sellerName\n      shortUrl: shortLink\n      countryCode\n    }\n    tout {\n      ...photoField\n    }\n    url: uri\n    metadata {\n      contentType\n    }\n    __typename\n  }\n\n  query Recipe($organizationId: ID!, $uri: String, $id: String) {\n    getRecipe(organizationId: $organizationId, uri: $uri, id: $id) {\n      allContributors {\n        edges {\n          node {\n            ...contributorField\n          }\n        }\n      }\n      id\n      lang\n      hed\n      pubDate\n      type\n      lede {\n        ...photoField\n      }\n      metadata {\n        contentType\n      }\n      tout {\n        ...photoField\n      }\n      socialPhoto: connected(relname: \"imageSocial\", limit: 1) {\n        edges {\n          node {\n            ...photoField\n          }\n        }\n      }\n      interludeOverride: connected(relname: \"interludeOverride\", limit: 1) {\n        edges {\n          node {\n            ... on CNEVideo {\n              cneId\n            }\n          }\n        }\n      }\n      tags {\n        id\n        name\n        slug\n        metadata {\n          contentType\n        }\n        hierarchy {\n          id\n          name\n          slug\n        }\n        root {\n          slug\n        }\n      }\n      socialTitle\n      bodyJsonML: body(textFormat: JSONML) {\n        content\n        connectedEmbeds(limit: 100) {\n          edges {\n            node {\n              ...externalLinkField\n              ...cartoonField\n              ...clipField\n              ...photoField\n              ...videoField\n              ...productField\n              ...articleField\n              ...galleryField\n              ...reviewField\n              ...contributorField\n              ...curatedListField\n              ...recipeField\n              ...venueField\n            }\n          }\n        }\n      }\n      times {\n        prepTime\n        activeTime\n        totalTime\n      }\n      servingSizeInfo {\n        description\n      }\n      ingredientGroups {\n        hed\n        ingredients {\n          description\n        }\n      }\n      aggregateRating\n      reviewsCount\n      products: connected(relname: \"products\") {\n        edges {\n          node {\n            ...productField\n          }\n        }\n      }\n      publishInfo {\n        firstPublished\n      }\n      ...nativeRecipeFields\n      versoSettings: categories(taxonomy: \"verso-settings\") {\n        hierarchy {\n          parentCategory {\n            slug\n          }\n          slug\n        }\n      }\n    }\n  }\n\n  fragment nativeRecipeFields on NativeRecipe {\n    campaignUrl\n    bylineOption\n    bylineVariant\n    advertiser {\n      name\n      logo {\n        aspectRatios {\n          url\n        }\n        filename\n        title\n        altText\n        id\n      }\n      url\n    }\n  }\n\n  fragment externalLinkField on ExternalLink {\n    id\n    hed\n    dek\n    url\n    tout {\n      id\n      aspectRatios {\n        name\n        url\n      }\n      metadata {\n        contentType\n      }\n    }\n    metadata {\n      contentType\n    }\n  }\n\n  fragment contributorField on Contributor {\n    url: uri\n    name\n    contributorType: type\n    photo: tout {\n      id\n      aspectRatios {\n        url\n      }\n    }\n    title\n    bio\n    socialMedia {\n      handle\n      network\n    }\n    metadata {\n      contentType\n    }\n  }\n\n  fragment photoField on Photo {\n    id\n    aspectRatios {\n      name\n      url\n      width\n      height\n      format\n    }\n    filename\n    credit\n    altText\n    contextualCaption\n    contextualTitle\n    caption\n    metadata {\n      contentType\n    }\n  }\n\n  fragment videoField on CNEVideo {\n    cneId\n    dek: description\n    hed: title\n    id\n    imageUrl\n    scriptEmbedUrl: scriptUrl\n    title\n    url: canonicalUrl\n    metadata {\n      contentType\n    }\n  }\n\n  fragment clipField on Clip {\n    id\n    metadata {\n      contentType\n    }\n    altText\n    credit\n    caption\n    filename\n    renditions {\n      mp4 {\n        url\n        width\n        height\n        resolution\n      }\n    }\n  }\n\n  fragment galleryField on Gallery {\n    id\n    metadata {\n      contentType\n    }\n    contributors {\n      ...contributorField\n    }\n    hed\n    promoDek\n    rubric\n    lede {\n      ...photoField\n      ...videoField\n      ...clipField\n    }\n    channel {\n      name\n      slug\n    }\n    channels: categories(taxonomy: \"channels\") {\n      name\n    }\n    tout {\n      aspectRatios {\n        name\n        url\n      }\n      metadata {\n        contentType\n      }\n    }\n    connectedItems {\n      edges {\n        node {\n          ...articleAsChildField\n          ...cartoonField\n          ...clipField\n          ...photoField\n          ...productField\n          ...recipeField\n          ...reviewField\n          ...venueField\n        }\n      }\n    }\n    url: uri\n  }\n\n  fragment cartoonField on Cartoon {\n    id\n    metadata {\n      contentType\n    }\n    filename\n    height\n    width\n    altText\n    caption\n    credit\n    title\n    pubDate\n    socialTitle\n    url: uri\n    aspectRatios {\n      height\n      name\n      url\n      width\n    }\n  }\n\n  fragment articleField on Article {\n    id\n    contributors {\n      ...contributorField\n    }\n    channel {\n      slug\n      name\n    }\n    channels: categories(taxonomy: \"channels\") {\n      name\n    }\n    hed\n    dek\n    promoHed\n    promoDek\n    url: uri\n    rubric\n    lede {\n      ...cartoonField\n      ...clipField\n      ...galleryField\n      ...photoField\n      ...videoField\n    }\n    tout {\n      ...photoField\n    }\n    metadata {\n      contentType\n    }\n  }\n\n  fragment reviewField on ProductReview {\n    id\n    contributors {\n      ...contributorField\n    }\n    metadata {\n      contentType\n    }\n    promoHed\n    promoDek\n    hed\n    dek\n    channel {\n      name\n      slug\n    }\n    tout {\n      ...photoField\n    }\n    body(textFormat: MARKDOWN) {\n      content\n    }\n    url: uri\n  }\n\n  fragment curatedListField on CuratedList {\n    id\n    hed\n    metadata {\n      contentType\n    }\n  }\n\n  # we have to use an article-like fragment to use it as children in other types to avoid the conflicts\n  fragment articleAsChildField on Article {\n    id\n    contributors {\n      ...contributorField\n    }\n    channel {\n      slug\n      name\n    }\n    channels: categories(taxonomy: \"channels\") {\n      name\n    }\n    hed\n    dek\n    promoHed\n    promoDek\n    url: uri\n    rubric\n    lede {\n      ...clipField\n      ...photoField\n      ...videoField\n    }\n    tout {\n      ...photoField\n    }\n    metadata {\n      contentType\n    }\n  }\n\n  fragment recipeField on Recipe {\n    id\n    metadata {\n      contentType\n    }\n    body(textFormat: MARKDOWN) {\n      content\n    }\n    channel {\n      name\n      slug\n    }\n    allContributors {\n      edges {\n        node {\n          ...contributorField\n        }\n      }\n    }\n    dek\n    hed\n    lede: connected(relname: \"photosTout\", limit: 1) {\n      edges {\n        node {\n          ...photoField\n        }\n      }\n    }\n    tout {\n      ...photoField\n    }\n    promoDek\n    promoHed\n    url: uri\n  }\n\n  fragment venueField on Venue {\n    id\n    name\n    venueUrl: url\n    metadata {\n      contentType\n    }\n  }`,
  variables: {"organizationId":"","uri":""}
}
  