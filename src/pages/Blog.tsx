import NavBar from '../components/NavBar';
import blob from '../assets/blob.jpeg';
import dean from '../assets/dean.jpg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

type Props = {};

export default function Blog({}: Props) {
  const modal = `
   <p style="text-align: left;">In a season filled with surprises, the underdog team, the Mavericks, has taken the basketball world by storm. Their latest game against the reigning champions, the Titans, showcased a level of skill and determination that left fans and critics in awe</p>

<p style="text-align: left;">
	<br>
</p>

<blockquote>

	<p style="text-align: left;"><strong><sup>&quot;<span style="font-size: 12px;">We played with heart and soul, and that&#39;s what made the difference&quot;</span></sup></strong><sup><span style="font-size: 12px;">&nbsp;</span></sup></p>
</blockquote>

<p>
	<br>
</p>

<p>Mavericks&#39; star player, after their stunning victory. The game was a nail-biter, with the Mavericks edging out the Titans in the final seconds, securing a 101-99 win.</p>

<p>
	<br>
</p>

<p>
	<br><span class="fr-img-caption fr-dib" style="width: 514px;"><span class="fr-img-wrap"><img data-fr-image-pasted="true" alt="Image of " src="https://lh3.googleusercontent.com/gg/AJIvXiv64ZP8Oze1gxj2Fjjc8D7eMHSeflQRFkbBYTaMRERsRazlmIoy3rroLtIkcTM6Km0fJiPruAyr9q1we1FGf2KTjzI0li629N-N3RV2mk2Z5J1in9uglvRSlRu-ZFvtj_QdmiK1gs2zNy0BU24omBPQxkaCSeJc_kMaXmuGjI1iSBrOxHsi" id="isPasted" class="fr-fil fr-dib"><span class="fr-inner" spellcheck="false">An Image about basketball</span></span></span>Coach Jane Smith attributed their success to rigorous training and an unyielding team spirit. <strong id="isPasted"><em>&quot;These players have shown that hard work and belief can overcome any odds,&quot;</em></strong> she remarked during the post-game press conference.</p>

<p>
	<br>As the season progresses, the Mavericks&#39; remarkable journey continues to inspire basketball enthusiasts everywhere. Their story is a testament to the power of perseverance and teamwork.</p>
`;

  return (
    <div>
      <NavBar />
      <div>
        <div className="flex flex-col items-center bg-white p-10">
          {/* Author information */}
          <div className="text-center">
            <img
              src={dean}
              alt="Author"
              className="rounded-full bg-auto w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Sergy Campbell</h3>
            <p className="text-gray-600">JULY 2, 2020</p>
          </div>
          {/* ARTICLE */}
          <h1 className="text-4xl font-bold mt-6 w-[68%] text-center">
            Your most unhappy customers are your greatest source of learning.
          </h1>
          <p className="text-lg text-gray-600 mt-4 w-[50%] text-center">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="mt-6">
            <img src={blob} alt="Article" className="w-[696px] h-[447px]" />
          </div>
          <div className="w-[65%] mt-10 text-gray-600 text-lg">
            <FroalaEditorView model={modal} />
          </div>
        </div>
      </div>
    </div>
  );
}
