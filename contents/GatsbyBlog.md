---
date: "2023-03-07"
title: "Gatsby로 Blog 만들기"
categories: ["Gatsby", "React", "Front End"]
series: 블로그 제작
featuredImage: "../src/images/icon.png"
link: "gatsby_blog"
summary: "ssg 라이브러리 gatsby 를 활용하여 블로그를 만들어보자"
---

# Gatsby 로 블로그를 만든 이유 👍

_velog_, _tstory_, _notion_ 등 좋은 플랫폼이 많치만 좀더 개발자스럽게 커스터마이징 할 수 있고 Gatsby 라는 라이브러리를 활용해 보고 싶어서 만들게 되었다.

<br/>

다만 디자인 라이브러리를 전혀 사용하지 않기 때문에 처음엔 외형적으로 초라해 보일 수 있지만 점점 발전해 가는 모습을 이 시리즈에 기록하려 한다 이 글은 기본적인 md 파일 구성 방법과 사용된 플러그 인이다.

<br/>

## 문법 ✍️

기본적인 MD 문서 작성법은 아래와 같다.

| Tag          |           Name            | Syntax                                              |
| :----------- | :-----------------------: | --------------------------------------------------- |
| `p`          |           단락            |                                                     |
| `h1`         |           제목1           | `#`                                                 |
| `h2`         |           제목2           | `##`                                                |
| `h3`         |           제목3           | `###`                                               |
| `h4`         |           제목4           | `####`                                              |
| `hr`         |            줄             | `---` or `***`                                      |
| `blockquote` |          인용구           | `>`                                                 |
| `ul`         |          리스트           | `-`                                                 |
| `ol`         |        숫자리스트         | `1.`                                                |
| `pre`        |         코드 단락         | `js console.log()`                                  |
| `code`       |        inline 코드        | `console.log()`                                     |
| `em`         |        _emphasis_         | `_emphasis_`                                        |
| `strong`     |        **strong**         | `**strong**`                                        |
| `delete`     |        ~~delete~~         | `~~delete~~`                                        |
| `a`          | [Link](https://naver.com) | `https://naver.com` or `[naver](https://naver.com)` |
| `img`        |          이미지           | `![alt]`(img-url)                                   |

## gatsby-config 💼

이 블로그에 사용중인 Gatsby plug 들과 역할은 아래와 같다

<br/>

### 1. gatsby-plugin-postcss

- Post CSS 에 대한 드롭인 제공

<br/>

### 2. gatsby-plugin-resolve-src

- 프로젝트가 /src 디렉토리를 baseUrl 로 사용하도록 웹팩을 구성함

```js
import MyComponent from "../../components/MyComponent";
// 아래로 수정
import MyComponent from "components/MyComponent";
```

plug 을 추가하고 jsconfig.json or tsconfig.json 에 아래 코드 추가 `code.js`

```json
{
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

<br/>

### 3. Image 관련

#### gatsby-plugin-image

gatsby 에서 이미지를 최적화하여 사용 할 수 있도록 도와준다

<br/>

#### gatsby-plugin-sharp

일반적인 웹 이미지 형식을 처리하는 설정을 제공함

- JPEG의 경우 기본 품질 수준이 50인 프로그레시브 이미지를 생성합니다.
- PNG의 경우 pngquant를 사용하여 이미지를 압축합니다. 기본적으로 [50-75]의 품질 설정을 사용합니다. 값 pngCompressionSpeed 은 1(무차별 대입)에서 10(가장 빠름)까지의 속도/품질 절충입니다. 속도 10은 품질이 5% 낮지만 기본값(4)보다 8배 빠릅니다. 대부분의 경우 기본값을 고수해야 하지만 매우 많은 수의 PNG가 있는 경우 빌드 시간을 크게 줄일 수 있습니다.

<br/>

#### gatsby-transformer-sharp

동적 이미지를 생성해 준다.

<br/>

#### Static Image 사용 시

**쿼리 작성**

```js
export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          link
          summary
          date
          categories
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                width: 350
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;
```

**렌더링**

```jsx
import { StaticImage } from "gatsby-plugin-image";

export function ImageComponent() {
  return (
    <StaticImage
      src="../images/img.png"
      width={200}
      height={200}
      alt="A dinosaur"
    />
  );
}
```

<br/>

#### Dynamic Image 사용 시

gatsby 에서 query 등으로 가져오는 동적인 이미지 렌더링 할 시 사용

```jsx
// GatsbyImageComponent.jsx
import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const GatsbyImageComponent = ({ gatsbyImageData, alt }) => {
  const featuredImg = getImage(gatsbyImageData);

  return <GatsbyImage image={featuredImg} alt={alt} />;
};

export default GatsbyImageComponent;
```

<br/>

### 4. gatsby-source-filesystem

로컬 파일 시스템에서 Gatsby 애플리케이션으로 데이터를 소싱하기 위한 Gatsby 플러그인

<br/>

5. ### gatsby-transformer-remark

markdown 파일을 해석하여 gatsby 에 출력

<br/>

#### Plugins

- **gatsby-remark-smartypants**
  - 글 내에서 사용되는 여러 문장 부호들을 더 깔끔한 부호로 바꿔주는 기능
- **gatsby-remark-copy-linked-files**
  - 마크다운 내에서 사용되는 이미지를 특정 디렉토리로 복사해주는 라이브러리
- **gatsby-remark-images**
  - 마크다운 문서 내의 이미지 사용을 최적화해주는 라이브러리
- **gatsby-remark-external-links**
  - 마크다운 내에서 사용되는 링크 태그의 `target`, rel 등의 속성을 지정해주는 라이브러리
- **gatsby-remark-prismjs & prismjs**
  - 마크다운 파일 내에 코드 블록에 구문 강조 표시를 추가한다.
