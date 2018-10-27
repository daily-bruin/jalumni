import * as React from 'react';

import PageContainer from '../components/PageContainer';

const mailchimpHTML = {
  __html: `<!-- Begin MailChimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<h5 style="text-align: center; padding: 5px; margin: 5px;">Join the Daily Bruin Alumni Network, and stay updated with our launch!</h5>
<div style="text-align: center">
	<p style="padding: 0; margin: 0;">Please fill out this form to join our alumni association and to help us build our directory. Share the link with your DB friends, too! For additional details, visit <a href="https://alumni.dailybruin.com">alumni.dailybruin.com</a>.</p>
	<hr style="padding: 0; margin: 0;>
	<p style="padding: 0; margin: 0;"><i>Are you interested in being a Class Captain for your graduating year? Please email Tanner Walters at <a href="mailto:alumni@dailybruin.com">alumni@dailybruin.com</a> to discuss our alumni outreach team!</i></p>
</div>
<div id="mc_embed_signup">
<form action="https://dailybruin.us18.list-manage.com/subscribe/post?u=014c63d44740a2918c9745891&amp;id=3dded81acb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Subscribe to our mailing list</h2>
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-FNAME">First Name  <span class="asterisk">*</span>
</label>
	<input type="text" value="" name="FNAME" class="required" id="mce-FNAME">
</div>
<div class="mc-field-group">
	<label for="mce-LNAME">Last Name  <span class="asterisk">*</span>
</label>
	<input type="text" value="" name="LNAME" class="required" id="mce-LNAME">
</div>
<div class="mc-field-group">
	<label for="mce-MMERGE3">Graduating year  <span class="asterisk">*</span>
</label>
	<input type="text" value="" name="MMERGE3" class="required" id="mce-MMERGE3">
</div>
<div class="mc-field-group">
	<label for="mce-MMERGE4">Daily Bruin section(s) and role(s)  <span class="asterisk">*</span>
</label>
	<input type="text" value="" name="MMERGE4" class="required" id="mce-MMERGE4">
</div>
<div class="mc-field-group">
	<label for="mce-MMERGE6">What are you doing currently? </label>
	<input type="text" value="" name="MMERGE6" class="" id="mce-MMERGE6">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_014c63d44740a2918c9745891_3dded81acb" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='MMERGE3';ftypes[3]='text';fnames[4]='MMERGE4';ftypes[4]='text';fnames[6]='MMERGE6';ftypes[6]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->`,
};

export default function JoinUsPage() {
  return (
    <PageContainer title="Join Us">
      <div dangerouslySetInnerHTML={mailchimpHTML} />
    </PageContainer>
  );
}
