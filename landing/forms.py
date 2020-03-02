from django import forms
from .models import *

class SubsForm(forms.ModelForm):

    class Meta:
        model=Sub
        exclude=[""]
