<?php namespace Bmut\Antsastre\Components;

use Cms\Classes\ComponentBase;
use Flash;
use ValidationException;
use Request;
use Mail;
use Validator;

class Form extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Form Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function defineProperties()
    {
        return [];
    }

    public function onSend()
   {
       $data = post();

       $rules = [
           'name' => 'required|min:4',
           'phone' => 'required',
           'email' => 'required|email',
           'subject' => 'required',
           'consult' => 'required'
       ];

       $validator = Validator::make($data, $rules);

       if ($validator->fails()) {
           throw new ValidationException($validator);
       } else {

               Mail::send('bmut.antsastre::mail.message', $data, function ($message) {

                   $message->to('Antonia@antoniasastre.xyz', 'Formulari de contacte');
                   $message->subject('Nou missatge del formulari de contacte');
               });

               Flash::success('El Formulario ha estat enviat amb exit');

       }
   }
}
