from django.db import models


class Sub(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=256)

    def __str__(self):
        return "Name: %s Email: %s" % (self.name, self.email)

    class Meta:
        verbose_name = "Sub"
        verbose_name_plural = "Subs"
